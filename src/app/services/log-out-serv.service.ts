import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LogOutServService {

  constructor() { }

  logOut(){
    localStorage.removeItem('user');
    console.log("Logged out");
  }
}
