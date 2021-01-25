import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { JobPosting } from './jobPosting';
import { Observable } from "rxjs";
import { Application } from '../services/application';
@Injectable({
  providedIn: 'root'
})
export class ViewApplicantsService {
  "http://localhost:9025/users/login";


  private urlGetApplicants = "http://localhost:9025/application/jobposting/";
  private urlApproveApplicant = "http://localhost:9025/application/approve/";
  private urlRejectApplicant = "http://localhost:9025/application/reject/";

  constructor(private httpCli: HttpClient) { }

  retrieveAllApplicants(postingId: Number): Observable<Application> {
    this.urlGetApplicants = this.urlGetApplicants + postingId;
    return this.httpCli.get<Application>(this.urlGetApplicants);
  }

  postApproveApplicant(applicantId: number): Observable<string> {
    return this.httpCli.post<string>(this.urlApproveApplicant + applicantId, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text' as 'json'
    });
  }

  postRejectApplicant(applicantId: number): Observable<string> {
    return this.httpCli.post<string>(this.urlRejectApplicant + applicantId, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text' as 'json'
    });
  }
  
  


}
