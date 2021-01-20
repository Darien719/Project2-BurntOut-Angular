import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserCreds } from "./usercreds";

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    private url = "http://localhost:9025/users/login";

    constructor(private httpCli: HttpClient) {  }

    postLogin(login:UserCreds): Observable<string>{
        return this.httpCli.post<string>(this.url, JSON.stringify(login), {
            headers: new HttpHeaders({
                'Content-Type':'application/json'
            }),
            responseType:'text' as 'json'
        });
    }
}