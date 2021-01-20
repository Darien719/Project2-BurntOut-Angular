import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserCreds } from "./usercreds";

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    private url = "http://localhost:9025/users/login";

    constructor(private httpCli: HttpClient) {  }

    postLogin(login:UserCreds){
        this.httpCli.post<UserCreds>(this.url, JSON.stringify(login));
    }
}