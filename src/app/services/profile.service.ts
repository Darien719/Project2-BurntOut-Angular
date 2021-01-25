import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private getUser = "http://localhost:9025/users/username/";

  constructor(private httpCli: HttpClient) { }

  retrieveUser(username: string): Observable<any> {
    this.getUser += username;
    return this.httpCli.get<any>(this.getUser);
  }
}
