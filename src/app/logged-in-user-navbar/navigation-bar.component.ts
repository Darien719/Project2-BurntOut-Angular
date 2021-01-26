import { Component, OnInit } from '@angular/core';
import { LogOutServService } from '../services/log-out-serv.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class LoggedInUserNavBarComponent implements OnInit {

  constructor(private logoutServ: LogOutServService) { }

  username: string = JSON.parse(localStorage.getItem('user')).username;;

  logOut(){
    this.logoutServ.logOut();
  }

  ngOnInit(): void {
  }

}
