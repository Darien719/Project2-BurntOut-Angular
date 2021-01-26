import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  constructor(private httpCli: HttpClient) { }

  retrieveUser(username: string): Observable<any> {
    var getUser = "http://localhost:9025/users/username/";
    getUser += username;
    return this.httpCli.get<any>(getUser);
  }
}
