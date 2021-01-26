import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { report } from 'process';
import { ProfileService } from '../services/profile.service';
import { SessionService } from '../services/session.service';
import { User } from '../services/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router, private sessServ: SessionService, private route: ActivatedRoute, private profServ: ProfileService) { }
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  company: string;
  userRole: string;
  isUser: boolean;
  isInEditMode: boolean;
  usernameExists: boolean;
  emailExists: boolean;
  userNotFound: boolean;
  errorMessage: string;
  currentUser = JSON.parse(localStorage.getItem("user"));
  user: User = {'id': -1, 'firstName':'', 'lastName':'', 
                    'email':'', 'userRole':'', 'company':'',  
                    'username':'', 'password':'', 'salt':''};

  ngOnInit(): void {
    this.isUser = false;
    this.isInEditMode = false;
    this.usernameExists = false;
    this.emailExists = false;
    this.userNotFound = false;

    if(this.sessServ.verifySession()){
      this.route.params.subscribe(params => {
        console.log(JSON.parse(localStorage.getItem("user")).username);
        console.log(this.currentUser);
        console.log(params['username']);
        if(JSON.parse(localStorage.getItem("user")).username == params['username']){
          this.isUser = true;
        }

        this.username = params['username'];
        this.profServ.retrieveUser(this.username).subscribe (
          response => {
            this.firstName = response.firstName;
            this.lastName = response.lastName;
            this.email = response.email;
            this.username = response.username;
            this.company = response.companyName;
            this.userRole = response.userRoleName;
            
            this.user.id = JSON.parse(localStorage.getItem("user"))["userId"];
            this.user.firstName = this.firstName;
            this.user.lastName = this.lastName;
            this.user.email = this.email;
            this.user.username = this.username;
            this.user.company = this.company;
            this.user.userRole = this.userRole;
          }
        )
      });

    }
  }

  updateInfo() {
    this.user.firstName = this.firstName;
    this.user.lastName = this.lastName;
    this.user.email = this.email;
    this.user.username = this.username;
    this.user.company = this.company;
    this.user.userRole = this.userRole;
console.log("hello");
    this.profServ.putUpdatedUser(this.user).subscribe(
      response => {
        if(response != null){
          localStorage.setItem("user", response);
          localStorage.setItem("firstName", JSON.parse(response).firstName);
          localStorage.setItem("lastName", JSON.parse(response).lastName);
          localStorage.setItem("username", JSON.parse(response).username);
          window.location.href='/profile/' + JSON.parse(localStorage.getItem("user")).username;
        }
      },
      error =>{
        this.usernameExists = false;
        this.emailExists = false;
        this.userNotFound = false;
        console.log("hey", error.status);
        if(error.status == 406) {
          this.usernameExists = true;
          this.errorMessage = "User with that username already exists";
        } 
        
        else if(error.status == 405) {
          this.emailExists = true;
          this.errorMessage = "User with that email already exists";
        }
        
        else if(error.status == 404) {
          this.userNotFound = true;
          this.errorMessage = "User not found";
        }

        else{ }
      });
  }

  cancelUpdate(){
    this.firstName = this.user.firstName;
    this.lastName = this.user.lastName;
    this.email = this.user.email;
    this.username = this.user.username;
    this.company = this.user.company;
    this.userRole = this.user.userRole;
  }

  editMode(): void {
    this.isInEditMode = !this.isInEditMode;
  }

}
