import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn:'root'
})

export class SessionService {
    
    constructor(private router:Router) { }

    verifySession():boolean{
        if (JSON.parse(localStorage.getItem('user'))){
          console.log('session verified')
          return true;
        }
        console.log('session not found');
        return false;
      }

}