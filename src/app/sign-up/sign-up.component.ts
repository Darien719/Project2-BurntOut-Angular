import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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
  username: string;
  password: string;

  signUpForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private router: Router) { }

  signUpPost(signUp: FormGroup){

    
  }

  ngOnInit(): void {
  }

}
