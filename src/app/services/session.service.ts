import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { UserRole } from "./userRole";

@Injectable({
    providedIn:'root'
})

export class SessionService {
    
    constructor(private router:Router) { }

    verifySession():boolean{
        if (JSON.parse(localStorage.getItem('user'))){
    
          return true;
        }
        
        return false;
    }

    verifyUser(correctId:number):boolean {
//      console.log(JSON.parse(localStorage.getItem('user')))
//      console.log(correctId);
      if (JSON.parse(localStorage.getItem('user')).userId==correctId){

        return true;
      }

      return false;
    }

    verifyUserRole(correctRole:string):boolean {
      if(JSON.parse(localStorage.getItem('user')).userRoleName==correctRole){

        return true;
      }
      
      return false;
    }

    verifyUserCompany(correctCompany:string):boolean {
      if(JSON.parse(localStorage.getItem('user')).companyName==correctCompany){
        return true;
      }
      return false;
    }

}