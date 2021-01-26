import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  ngOnInit(): void {
    this.isUser = false;
    this.isInEditMode = false;
    if(this.sessServ.verifySession()){
      this.route.params.subscribe(params => {
        if(localStorage.getItem("username") == params['username']){
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
          }
        )
      });

    }
  }

  editMode(): void {
    this.isInEditMode = !this.isInEditMode;
  }

}
