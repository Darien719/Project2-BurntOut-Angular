import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

//Provides an injectable object that allows you to clear the local storage of logged in data. Signing out the user
@Injectable({
  providedIn: 'root'
})
export class LogOutServService {


  constructor(private router:Router) { }

  logOut(){
    localStorage.removeItem('user');
    this.router.navigate(['login']);    
  }
}
