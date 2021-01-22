import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { JobPosting } from './jobPosting';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CreateJobService {
  
  private url = "http://localhost:9025/jobpostings";

  constructor(private httpCli: HttpClient) { }

  postJob(job:JobPosting): Observable<String>{
    return this.httpCli.post<String>(this.url, JSON.stringify(job), {
        headers: new HttpHeaders({
            'Content-Type':'application/json'
        }),
    });
}


  
}