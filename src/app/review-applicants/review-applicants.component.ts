import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Application } from '../services/application';
import { ViewApplicantsService } from '../services/view-applicants.service';

@Component({
  selector: 'app-review-applicants',
  templateUrl: './review-applicants.component.html',
  styleUrls: ['./review-applicants.component.css']
})
export class ReviewApplicantsComponent implements OnInit {

  constructor(private router: Router, private viewAppServ: ViewApplicantsService, private route: ActivatedRoute) { }
 
  applicants: Application[];
  postingId: Number;
  private sub: any;

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.postingId = +params['id']; // (+) converts string 'id' to a number
      this.getAllApplicants();
   });
  }

  getAllApplicants() : void {
    let thisArray : Application [];
    this.viewAppServ.retrieveAllApplicants(this.postingId).subscribe (
      response => {
      thisArray = Object.values(response);
      this.applicants = thisArray;
      console.log(this.applicants);
      }
    )
  }

  approveApplicant(applicationId: number): void{
    this.viewAppServ.postApproveApplicant(applicationId).subscribe (
      response => {
        location.reload();
      }
    )
  }

  rejectApplicant(applicationId: number): void{
    this.viewAppServ.postRejectApplicant(applicationId).subscribe (
      response => {
        location.reload();
      }
    )
  }

 
}
