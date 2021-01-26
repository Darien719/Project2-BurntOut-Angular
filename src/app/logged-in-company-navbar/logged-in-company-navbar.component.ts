import { Component, OnInit } from '@angular/core';
import { LogOutServService } from '../services/log-out-serv.service';

@Component({
  selector: 'app-logged-in-company-navbar',
  templateUrl: './logged-in-company-navbar.component.html',
  styleUrls: ['./logged-in-company-navbar.component.css']
})
export class LoggedInCompanyNavbarComponent implements OnInit {

  constructor(private logoutServ: LogOutServService) { }

  username: string = JSON.parse(localStorage.getItem('user')).username;;


  logOut(){
    this.logoutServ.logOut();
  }

  ngOnInit(): void {
  }

}
