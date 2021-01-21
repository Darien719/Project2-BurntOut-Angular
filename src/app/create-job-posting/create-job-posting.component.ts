import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-job-posting',
  templateUrl: './create-job-posting.component.html',
  styleUrls: ['./create-job-posting.component.css']
})
export class CreateJobPostingComponent implements OnInit {

  company_id:number;
  poster_id:number;
  posting_title:string;
  location_id:number;
  industry_id:number;
  description:string;

  constructor() { }

  ngOnInit(): void {
   
  }

}
