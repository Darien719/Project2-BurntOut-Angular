import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./user";
import { UserCreds } from "./usercreds";

@Injectable({
    providedIn: 'root'
})

export class PasswordResetService {
    private url = "http://localhost:9025/users/passwordreset";

    constructor(private httpCli: HttpClient) {  }

    resetPass(info:UserCreds): Observable<string>{
        return this.httpCli.post<string>(this.url, JSON.stringify(info), {
            headers: new HttpHeaders({
                'Content-Type':'application/json'               
            }),
            responseType:'text' as 'json'
        });
    }
}