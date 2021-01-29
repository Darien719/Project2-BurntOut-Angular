import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from './application';

@Injectable({
  providedIn: 'root'
})
export class CreateApplicationService {

  private url = "http://ec2-13-52-246-229.us-west-1.compute.amazonaws.com:9025/application";

  constructor(private httpCli: HttpClient) { }

  postApplication(application:Application): Observable<string>{
    return this.httpCli.post<string>(this.url, JSON.stringify(application), {
        headers: new HttpHeaders({
            'Content-Type':'application/json'
        }),
        responseType: 'text' as 'json'
    });
  }
}
 