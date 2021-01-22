import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  firstName:string;

  constructor(private router:Router, private sessServ: SessionService) { }

  ngOnInit(): void {
    if(this.sessServ.verifySession()){
      this.firstName = JSON.parse(localStorage.getItem('user')).firstName;
    } else {
      window.location.href = '/login';
    }
    // if(localStorage.getItem('user')){
    //   this.firstName = JSON.parse(localStorage.getItem('user')).firstName;
    // }
  }

}
