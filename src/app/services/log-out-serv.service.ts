import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LogOutServService {

  constructor(private router: Router) { }

  logOut(){
    localStorage.removeItem('user');
    console.log("Logged out");
    this.router.navigate(['login']);    
  }
}
