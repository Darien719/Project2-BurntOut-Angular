import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from './application';

@Injectable({
  providedIn: 'root'
})
export class ViewApplicationsService {

  "http://localhost:9025/users/login";


  private urlGetApplications = "http://localhost:9025/application/user/";
  constructor(private httpCli: HttpClient) { }

  retrieveAllApplicantions(username: string): Observable<Application> {
    this.urlGetApplications = this.urlGetApplications + username;
    return this.httpCli.get<Application>(this.urlGetApplications);
  }
}
