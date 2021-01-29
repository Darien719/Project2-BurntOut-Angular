import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { User } from "./user";

//Provides an injectable class that can be to get profile info from the database.
@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private createUserURL = "http://ec2-13-52-246-229.us-west-1.compute.amazonaws.com:9025/users/newuser";

  constructor(private httpCli: HttpClient) { }

  postNewUser(newUser:User): Observable<string>{
    return this.httpCli.post<string>(this.createUserURL, JSON.stringify(newUser), {
        headers: new HttpHeaders({
            'Content-Type':'application/json'
        }),
        responseType:'text' as 'json'
    });
}
}
