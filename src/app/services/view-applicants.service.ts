import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { JobPosting } from './jobPosting';
import { Observable } from "rxjs";
import { Application } from '../services/application';


//Provides an injectable class that can be used to get applications from the database and approve and deny them based on the company using the service
@Injectable({
  providedIn: 'root'
})
export class ViewApplicantsService {
  
  constructor(private httpCli: HttpClient) { }

  retrieveAllApplicants(postingId: Number): Observable<Application> {
    var urlGetApplicants = "http://ec2-13-52-246-229.us-west-1.compute.amazonaws.com:9025/application/jobposting/";
    urlGetApplicants = urlGetApplicants + postingId;
    return this.httpCli.get<Application>(urlGetApplicants);
  }

  postApproveApplicant(applicantId: number): Observable<string> {
    var urlApproveApplicant = "http://ec2-13-52-246-229.us-west-1.compute.amazonaws.com:9025/application/approve/";
    return this.httpCli.post<string>(urlApproveApplicant + applicantId, JSON.stringify(applicantId),{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text' as 'json'
    });
  }

  postRejectApplicant(applicantId: number): Observable<string> {
    var urlRejectApplicant = "http://ec2-13-52-246-229.us-west-1.compute.amazonaws.com:9025/application/reject/";
    return this.httpCli.post<string>(urlRejectApplicant + applicantId, JSON.stringify(applicantId),{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text' as 'json'
    });
  }




}
