import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Application } from '../services/application';
import { SessionService } from '../services/session.service';
import { ViewApplicationsService } from '../services/view-applications.service';

@Component({
  selector: 'app-view-applications',
  templateUrl: './view-applications.component.html',
  styleUrls: ['./view-applications.component.css']
})
export class ViewApplicationsComponent implements OnInit {

  constructor(private router: Router, private viewAppServ: ViewApplicationsService, private route: ActivatedRoute,
    private sessServ:SessionService) { }
 
  applications: Application[];
  username: string;
  private sub: any;

  ngOnInit(): void {
      if(this.sessServ.verifySession()){
          this.username = localStorage.getItem("username");
          console.log(this.username);

      } else {
        window.location.href = '/login';
      }
      this.getAllMyApplications();
  }


    /* this.sub = this.route.params.subscribe(params => {
      this.username = +params['id']; // (+) converts string 'id' to a number
      console.log(this.username);
      this.getAllMyApplications();
   }); */
  

  getAllMyApplications() : void {
    let thisArray : Application [];
    this.viewAppServ.retrieveAllApplicantions(this.username).subscribe (
      response => {
      thisArray = Object.values(response);
      this.applications = thisArray;
      console.log(this.applications);
      }
    )
  }


}
