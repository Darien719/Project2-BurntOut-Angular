import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgModel, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service';
import { User } from '../services/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  pageTitle = "Register for BurntOut!";
  errorMessage = "User with that username or email already exists"
  errorOccurred = false;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  userRole: string;
  username: string;
  password: string;
  newUser: User = {'id': -1, 'firstName':'', 'lastName':'', 
                    'email':'', 'userRole':'', 'company':'',  
                    'username':'', 'password':'', 'salt':''};

  constructor(private router: Router, private signUpServ: SignupService) { }

  signUpPost(){
    console.log(this.newUser.firstName);
    console.log(this.newUser.lastName);
    console.log(this.newUser.email);
    console.log(this.newUser.company);
    console.log(this.newUser.userRole);
    console.log(this.newUser.username);
    console.log(this.newUser.password);

    this.signUpServ.postNewUser(this.newUser).subscribe(
      response =>{
        console.log(response);
        let substr = "User Successfully Created!";
         if(response.includes(substr)){
           console.log("status is cool");
           this.goHome();
         } else{
           console.log('issue');
         }
      },
      error =>{
        this.errorOccurred = true;
      } 
    );
  }

  goHome():void {
    this.router.navigate([''])
  }


  ngOnInit(): void {
  }

}
