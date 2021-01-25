import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from './application';

@Injectable({
  providedIn: 'root'
})
export class ViewApplicationsService {

  constructor(private httpCli: HttpClient) { }

  retrieveAllApplicantions(username: string): Observable<Application> {
    let urlGetApplications = "http://localhost:9025/application/user/";
    urlGetApplications = urlGetApplications + username;
    return this.httpCli.get<Application>(urlGetApplications);
  }
}
