import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from './job';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private allJobsUrl = "http://localhost:9025/jobpostings/all";

  constructor(private httpCli: HttpClient) { }

  retrieveAllJobs(): Observable<Job> {
    return this.httpCli.get<Job>(this.allJobsUrl);
  }
}
