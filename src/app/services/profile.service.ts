import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

//Provides an injectable class that can be used to get profile info from the database.
@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  constructor(private httpCli: HttpClient) { }

  retrieveUser(username: string): Observable<any> {
    var getUser = "http://ec2-13-52-246-229.us-west-1.compute.amazonaws.com:9025/users/username/";
    getUser += username;
    return this.httpCli.get<any>(getUser);
  }

  putUpdatedUser(user: User): Observable<any> {
    var getUser = "http://ec2-13-52-246-229.us-west-1.compute.amazonaws.com:9025/users";
      return this.httpCli.put<string>(getUser, JSON.stringify(user), {
          headers: new HttpHeaders({
              'Content-Type':'application/json'
          }),
          responseType:'text' as 'json'
      });
    }
}
