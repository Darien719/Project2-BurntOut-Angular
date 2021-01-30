
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Application } from '../services/application';
import { JobService } from '../services/job.service';
import { JobPosting } from '../services/jobPosting';
import { SessionService } from '../services/session.service';
import { ViewApplicantsService } from '../services/view-applicants.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-review-applicants',
  templateUrl: './review-applicants.component.html',
  styleUrls: ['./review-applicants.component.css']
})
export class ReviewApplicantsComponent implements OnInit {

  constructor(private router: Router, private viewAppServ: ViewApplicantsService, private route: ActivatedRoute,
    private sessServ: SessionService, private jobServ: JobService, @Inject(DOCUMENT) private document: Document) { }

  applicants: Application[];
  postingId: Number;
  private sub: any;
  posterId: number;
  company: string;
  private url: string;

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.postingId = +params['id']; // (+) converts string 'id' to a number
      this.getSessionInfo(this.postingId);

    });
  }

  //Gets all the applicants for a job
  getAllApplicants(): void {
    let thisArray: Application[];
    this.viewAppServ.retrieveAllApplicants(this.postingId).subscribe(
      response => {
        thisArray = Object.values(response);
        this.applicants = thisArray;
      }
    )
  }

  // Gets the url to the s3 bucket containing the users resume images.
  getUrl(firstName, lastName, postingId): string {
    this.url = "https://burntout.s3.amazonaws.com/" + firstName + lastName + "JobId" + postingId;
    return this.url;
  }

  //chages the status of the application to approved.
  approveApplicant(applicationId: number): void {
    this.viewAppServ.postApproveApplicant(applicationId).subscribe(
      response => {

      },
      error => {

      }
    )
  }

  //Changes the status of the application ot rejected.
  rejectApplicant(applicationId: number): void {
    this.viewAppServ.postRejectApplicant(applicationId).subscribe(
      response => {

      }
    )
  }

  //Checks that the the user(company) has access rights to see this component.
  getSessionInfo(postingId: Number) {
    this.jobServ.retrieveJobByPostingId(postingId).subscribe(
      response => {
        this.company = response.companyName;
        console.log(this.posterId);
        if (this.sessServ.verifyUserCompany(this.company)) {
          this.getAllApplicants();
        } else {
          window.alert('You do not have access to this page');
          this.router.navigate(['company/view-postings'])
        }
      },
      error => {
        console.log(error);
        return false;
      }
    )
  }

}
