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
  posting_id:number;
  status:string;
  resume: File
  application:Application = {
  'application_id':0,
  'posting_id': 0,
  'username': '',
  'status' : 'Pending',
  'resume' : null
};

  applicationgroup = new FormGroup({
    posting_id: new FormControl(''),
    username: new FormControl(''),
  })

  ngOnInit(): void {
      if(this.sessServ.verifySession()){
  
      } else {
        window.location.href = '/login';
      }
    throw new Error('Method not implemented.');
  }

  submitApplication(apgroup : FormGroup) : void {
    this.application.posting_id = this.applicationgroup.get('posting_id').value;
    this.application.username = this.applicationgroup.get('username').value;
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
    this.fileUploadServ.uploadFile(file, this.username);
  }

  onChange(event) {
    this.toFile = event.target.files;
    this.resume = this.toFile;
  }
}
