import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class AccountRecoveryService {
    private url = "http://ec2-13-52-246-229.us-west-1.compute.amazonaws.com:9025/users/recover";

    constructor(private httpCli: HttpClient) {  }

    accRecover(email:string): Observable<string>{
        return this.httpCli.post<string>(this.url, {'email':email}, {
            headers: new HttpHeaders({
                'Content-Type':'application/json'               
            }),
            responseType: 'text' as 'json'
        });
    }
}