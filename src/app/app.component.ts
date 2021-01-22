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
  

  constructor() { }

  ngOnInit(): void {
    if(this.verifySession()){
      this.userRoleName = JSON.parse(localStorage.getItem('user')).userRoleName;
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
