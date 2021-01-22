import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Application } from '../services/application';
import { CreateApplicationService } from '../services/create-application.service';
import { CreateJobService } from '../services/create-job.service';

@Component({
  selector: 'app-application-form-page',
  templateUrl: './application-form-page.component.html',
  styleUrls: ['./application-form-page.component.css']
})
export class ApplicationFormPageComponent implements OnInit {

  createAppServ: CreateApplicationService 
  constructor(createAppServ) { }

  username:string;
  posting_id:number;
  title:string;
  location_id:number;
  industry_id:number;
  description:string;
  resume: File
  application:Application = {

  'posting_id': 0,
  'username': '',
  'status' : '',
  'resume' : null
};

  applicationgroup = new FormGroup({
    posting_id: new FormControl(''),
    username: new FormControl(''),
    //resume: new FormControl(''),
  })

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  jobPost(jobgroup :FormGroup){

    this.application.posting_id = this.applicationgroup.get('posting_id').value;
    this.application.username = this.applicationgroup.get('username').value;
  }

  handleFileInput(files: FileList) {
    this.resume = files.item(0);
  }

  submitApplication() : void {

  this.createAppServ.postApplication(this.application).subscribe(
    response=>{
      console.log("In response");
      console.log(response);
    },error=>{
        console.log("Problem posting application");
        console.log(error);
    }
    
  )
  }


    /* this.createAppServ.postApplication(this.application).subscribe(
      response=>{
        console.log("In response");
        console.log(response);
      },error=>{
          console.log("Problem posting application");
          console.log(error);
      }
    ); */

    

  }
