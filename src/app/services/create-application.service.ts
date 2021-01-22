import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from './application';

@Injectable({
  providedIn: 'root'
})
export class CreateApplicationService {

  private url = "http://localhost:9025/application";

  constructor(private httpCli: HttpClient) { }

  postApplication(application:Application): Observable<String>{
    return this.httpCli.post<String>(this.url, JSON.stringify(application), {
        headers: new HttpHeaders({
            'Content-Type':'application/json'
        }),
    });
}
}
