import { APP_BASE_HREF } from '@angular/common';
import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Application } from '../services/application';
import { JobService } from '../services/job.service';
import { JobPosting } from '../services/jobPosting';
import { SessionService } from '../services/session.service';
import { ViewApplicantsService } from '../services/view-applicants.service';

@Component({
  selector: 'app-review-applicants',
  templateUrl: './review-applicants.component.html',
  styleUrls: ['./review-applicants.component.css']
})
export class ReviewApplicantsComponent implements OnInit {

  constructor(private router: Router, private viewAppServ: ViewApplicantsService, private route: ActivatedRoute, private sessServ:SessionService, private jobServ:JobService) { }
 
  applicants: Application[];
  postingId: Number;
  private sub: any;
  posterId: number;
  verification: boolean;

  ngOnInit(): void {
    this.verification=false;
    this.sub = this.route.params.subscribe(params => {
      this.postingId = +params['id']; // (+) converts string 'id' to a number
      this.getSessionInfo(this.postingId);
   });
  }

  getAllApplicants() : void {
    let thisArray : Application [];
    this.viewAppServ.retrieveAllApplicants(this.postingId).subscribe (
      response => {
      thisArray = Object.values(response);
      this.applicants = thisArray;
      }
    )
  }

  approveApplicant(applicationId: number): void{
    this.viewAppServ.postApproveApplicant(applicationId).subscribe (
      response => {
        
      },
      error => {
       
      }
    )
  }

  rejectApplicant(applicationId: number): void{
    this.viewAppServ.postRejectApplicant(applicationId).subscribe (
      response => {
        
      }
    )
  }

  getSessionInfo(postingId:Number){
     this.jobServ.retrieveJobByPostingId(postingId).subscribe(
      response=>{
        console.log(response);
        this.posterId = response.poster_id;
        console.log(this.posterId);
        if(this.sessServ.verifyUser(this.posterId)){
          this.getAllApplicants();
        } else{
          window.alert('You do not have access to this page')
  //        location.href='/'
        }
        },
      error=>{
        console.log(error);
        return false;
      }
    )
  }

}
 