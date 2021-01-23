import { Component, OnInit } from '@angular/core';
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
  constructor(private createAppServ: CreateApplicationService, 
    private fileUploadServ: FileUploadService) { }

  username:string;
  posting_id:number;
  status:string;
  resume: File
  application:Application = {
  'posting_id': 0,
  'username': '',
  'status' : 'Pending',
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

/*   jobPost(jobgroup :FormGroup){

    this.application.posting_id = this.applicationgroup.get('posting_id').value;
    this.application.username = this.applicationgroup.get('username').value;
  } */

  /* handleFileInput(files: FileList) {
    this.resume = files.item(0);
  } */

  submitApplication(apgroup : FormGroup) : void {
    this.application.posting_id = this.applicationgroup.get('posting_id').value;
    this.application.username = this.applicationgroup.get('username').value;
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

/*   submit() {
    const file = this.toFile.item(0);
    this.fileUploadServ.fileUpload(file);
  }

  onChange(event) {
    this.toFile = event.target.files;

  } */

  
  
}
