import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from '../services/job';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-view-self-jobpostings',
  templateUrl: './view-self-jobpostings.component.html',
  styleUrls: ['./view-self-jobpostings.component.css']
})
export class ViewSelfJobpostingsComponent implements OnInit {

  constructor(private router: Router, private jobServ: JobService) { }

  jobs : Job [];

  ngOnInit(): void {
    this.getAllApplicants();
  }

  getAllApplicants() : void {
    let thisArray : Job [];
    this.jobServ.retrieveJobsByCompany(JSON.parse(localStorage.getItem('user')).companyName).subscribe (
      response => {
      thisArray = Object.values(response);
      this.jobs = thisArray;
    
      }
    )
  }



}
