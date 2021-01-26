import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from './job';
import { JobPosting } from './jobPosting';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private allJobsUrl = "http://localhost:9025/jobpostings/all";
  private companyJobsUrl = "http://localhost:9025/jobpostings/company/name/";
  private singleJobUrl = "http://localhost:9025/jobpostings/posting-id/"

  constructor(private httpCli: HttpClient) { }

  retrieveAllJobs(): Observable<Job> {
    return this.httpCli.get<Job>(this.allJobsUrl);
  }

  retrieveJobsByCompany(companyName: String): Observable<Job> { 
    return this.httpCli.get<Job>(this.companyJobsUrl + companyName);
  }

  retrieveJobByPostingId(postingId:Number): Observable<Job> {
    return this.httpCli.get<Job>(this.singleJobUrl+postingId);
  }

}
