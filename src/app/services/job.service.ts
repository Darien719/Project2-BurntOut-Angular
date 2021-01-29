import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from './job';
import { JobPosting } from './jobPosting';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private allJobsUrl = "http://ec2-13-52-246-229.us-west-1.compute.amazonaws.com:9025/jobpostings/all";

  constructor(private httpCli: HttpClient) { }

  retrieveAllJobs(): Observable<Job> {
    return this.httpCli.get<Job>(this.allJobsUrl);
  }

  retrieveJobsByCompany(companyName: String): Observable<Job> { 
    let companyJobsUrl = "http://ec2-13-52-246-229.us-west-1.compute.amazonaws.com:9025/jobpostings/company/name/"
    return this.httpCli.get<Job>(companyJobsUrl + companyName);
  }

  retrieveJobByPostingId(postingId:Number): Observable<Job> {
    let singleJobUrl = "http://ec2-13-52-246-229.us-west-1.compute.amazonaws.com:9025/jobpostings/posting-id/"
    return this.httpCli.get<Job>(singleJobUrl+postingId);
  }

}
