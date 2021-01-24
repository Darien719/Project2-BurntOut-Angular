import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project2-BurntOut';

  userRoleName:string="";
  firstName: string = "";
  lastName: string = "";
  username: string = "";
  

  constructor() { }

  ngOnInit(): void {
    if(this.verifySession()){
      this.userRoleName = JSON.parse(localStorage.getItem('user')).userRoleName;
      this.firstName = JSON.parse(localStorage.getItem('user')).firstName;
      this.lastName = JSON.parse(localStorage.getItem('user')).lastName;
      this.username = JSON.parse(localStorage.getItem('user')).username;
      localStorage.setItem("firstName", this.firstName);
      localStorage.setItem("lastName", this.lastName);
      localStorage.setItem("username", this.username);
    }
  }

  verifySession():boolean{
    if (JSON.parse(localStorage.getItem('user'))){
      console.log('session verified')
      return true;
    }
    console.log('session not found');
    return false;
  }

}
