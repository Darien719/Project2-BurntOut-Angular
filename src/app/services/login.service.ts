import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./user";
import { UserCreds } from "./usercreds";

//Provides an injectable object that allows you to query the database to see if the password and username match.
@Injectable({
    providedIn: 'root'
})

export class LoginService {
    private url = "http://ec2-13-52-246-229.us-west-1.compute.amazonaws.com:9025/users/login";

    constructor(private httpCli: HttpClient) {  }

    postLogin(login:UserCreds): Observable<User>{
        return this.httpCli.post<User>(this.url, JSON.stringify(login), {
            headers: new HttpHeaders({
                'Content-Type':'application/json'               
            }),
        });
    }
}