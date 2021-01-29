import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


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
