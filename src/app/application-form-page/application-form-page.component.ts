import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Application } from '../services/application';
import { CreateApplicationService } from '../services/create-application.service';
import {FileUploadService} from '../services/file-upload.service';

@Component({
  selector: 'app-application-form-page',
  templateUrl: './application-form-page.component.html',
  styleUrls: ['./application-form-page.component.css']
})
export class ApplicationFormPageComponent implements OnInit {
  pageTitle = "Application Form";
  toFile;

  constructor(private createAppServ: CreateApplicationService, private sessServ:SessionService
    
    , private fileUploadServ: FileUploadService) { }

  username:string;
  posting_id:string;
  status:string;
  resume: File;
  firstName : string;
  lastName : string;
  application:Application = {
  'application_id':0,
  'posting_id': '',
  'username': '',
  'status' : 'Pending',
  'resume' : null, 
  firstName : '',
  lastName : ''
};

  applicationgroup = new FormGroup({
    posting_id: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl('')
  })

  ngOnInit(): void {
      if(this.sessServ.verifySession()){
          this.firstName = localStorage.getItem("firstName");
          this.lastName = localStorage.getItem("lastName");
          this.posting_id = localStorage.getItem("postingId");
          this.username = localStorage.getItem("username");
          console.log(this.firstName);
          console.log(this.lastName);
          console.log(this.posting_id);
          console.log(this.username);

      } else {
        window.location.href = '/login';
      }
  }

  submitApplication(apgroup : FormGroup) : void {
    this.application.posting_id = this.posting_id;
    this.application.username = this.username;
    this.application.resume = this.resume;
    this.submit();
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

  submit() {
    const file = this.toFile.item(0);
    this.fileUploadServ.uploadFile(file, this.firstName, this.lastName, this.posting_id);
  }

  onChange(event) {
    this.toFile = event.target.files;
    this.resume = this.toFile;
  }
}
