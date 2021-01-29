import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from '../services/job';
import { JobService } from '../services/job.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-view-self-jobpostings',
  templateUrl: './view-self-jobpostings.component.html',
  styleUrls: ['./view-self-jobpostings.component.css']
})
export class ViewSelfJobpostingsComponent implements OnInit {

  constructor(private router: Router, private jobServ: JobService, private sessServ:SessionService) { }

  jobs : Job [];

  ngOnInit(): void {
    if(this.sessServ.verifySession()){
      this.getSessionInfo('Company');
      this.getAllApplicants();
    }
  }

  getAllApplicants() : void {
    let user = localStorage.getItem('user');
    let companyName = "";
    if(user!=null){
    companyName =  JSON.parse(user).companyName;
    }
    let thisArray : Job [];
    this.jobServ.retrieveJobsByCompany(companyName).subscribe (
      response => {
      thisArray = Object.values(response);
      this.jobs = thisArray;
    
      }
    )
  }

  getSessionInfo(userRole:string){
    if(!this.sessServ.verifyUserRole(userRole)){
      window.alert('You do not have access to this page');
      this.router.navigate(['/']);
    }
  }

}
