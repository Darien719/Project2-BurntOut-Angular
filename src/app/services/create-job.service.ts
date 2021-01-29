import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { JobPosting } from './jobPosting';
import { Observable } from "rxjs";

//Provides an injectable object that allows you to query the database to create an job posting.
@Injectable({
  providedIn: 'root'
})
export class CreateJobService {
  
  private url = "http://ec2-13-52-246-229.us-west-1.compute.amazonaws.com:9025/jobpostings";
  private urlGetCompanyId = "http://ec2-13-52-246-229.us-west-1.compute.amazonaws.com:9025/jobpostings/company-id/"

  constructor(private httpCli: HttpClient) { }


  postJob(job:JobPosting): Observable<String>{
    return this.httpCli.post<String>(this.url, JSON.stringify(job), {
        headers: new HttpHeaders({
          'Content-Type':'application/json'
        }),responseType: 'text' as 'json'
    });
}

getCompanyId(name: String): Observable<String>{
  return this.httpCli.get<String>(this.urlGetCompanyId+name);
}


  
}
