import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  firstName:string;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.firstName = JSON.parse(localStorage.getItem('user')).firstName;
    if(!this.firstName){

    }
  }

  verifySession(){
    if (!JSON.parse(localStorage.getItem('user'))){
      this.router.navigate(['login']);
    }
  }

}
