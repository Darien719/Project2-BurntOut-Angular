import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LogOutServService {

<<<<<<< HEAD
  constructor(private router:Router) { }
=======
  constructor(private router: Router) { }
>>>>>>> 1a26b42f11c40f0bb9e87a80ee90c6d085a63ede

  logOut(){
    localStorage.removeItem('user');
    console.log("Logged out");
<<<<<<< HEAD
    this.router.navigate(['login']);    
=======
    this.router.navigate([''])
    location.reload();
    
>>>>>>> 1a26b42f11c40f0bb9e87a80ee90c6d085a63ede
  }
}
