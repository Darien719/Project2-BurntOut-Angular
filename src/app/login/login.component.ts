import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { UserCreds } from '../services/usercreds';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  usercred:UserCreds = {'username':'', 'password':''};

  logingroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private router: Router, private loginserv: LoginService) { }

  
  loginPost(login: FormGroup){

    console.log(login.get('username').value);
    console.log(login.get('password').value);
    this.usercred.username = login.get('username').value;
    this.usercred.password = login.get('password').value; 
    this.loginserv.postLogin(this.usercred);
  }

  ngOnInit(): void {
  }

}
