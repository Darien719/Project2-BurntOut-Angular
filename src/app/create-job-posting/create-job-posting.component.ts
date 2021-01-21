import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CreateJobService } from '../services/create-job.service';
import { JobPosting } from '../services/jobPosting';

@Component({
  selector: 'app-create-job-posting',
  templateUrl: './create-job-posting.component.html',
  styleUrls: ['./create-job-posting.component.css']
})
export class CreateJobPostingComponent implements OnInit {

  company_id:number;
  poster_id:number;
  title:string;
  location_id:number;
  industry_id:number;
  description:string;
  jobPosting:JobPosting = {'company_id': 1,
  'poster_id': 0,
  'title': '',
  'location_id': 0,
  'industry_id': 0,
  'description': ''};

  jobgroup = new FormGroup({
    company_id: new FormControl(''),
    poster_id: new FormControl(''),
    title: new FormControl(''),
    location: new FormControl(''),
    industry: new FormControl(''),
    description: new FormControl(''),
  })

  constructor(private createJobServ: CreateJobService) { }

  jobPost(jobgroup :FormGroup){

    this.jobPosting.company_id = jobgroup.get('company_id').value;
    this.jobPosting.poster_id = jobgroup.get('poster_id').value;
    this.jobPosting.title = jobgroup.get('title').value;
    this.jobPosting.location_id = jobgroup.get('location').value;
    this.jobPosting.industry_id = jobgroup.get('industry').value;
    this.jobPosting.description = jobgroup.get('description').value;

    this.createJobServ.postJob(this.jobPosting).subscribe(
      response=>{
        console.log("In response");
        console.log(response);
      },error=>{
          console.log("Problem posting job");
          console.log(error);
      }
    );

  }





  ngOnInit(): void {
   
  }

}
