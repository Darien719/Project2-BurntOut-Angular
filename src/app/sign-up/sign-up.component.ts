import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  signUpForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    userRole: new FormControl(''),
    company: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private router: Router, private signUpServ: SignupService) { }

  signUpPost(signUp: FormGroup){
    this.newUser.firstName = signUp.get('firstName').value;
    this.newUser.lastName = signUp.get('lastName').value;
    this.newUser.email = signUp.get('email').value;
    this.newUser.company = signUp.get('company').value;
    this.newUser.userRole = signUp.get('userRole').value;
    this.newUser.username = signUp.get('username').value;
    this.newUser.password = signUp.get('password').value;

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
      }
    );
  }

  goHome():void {
    this.router.navigate([''])
  }


  ngOnInit(): void {
  }

}
