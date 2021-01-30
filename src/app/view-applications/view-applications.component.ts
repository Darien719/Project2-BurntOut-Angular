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
    private sessServ: SessionService) { }

  applications: Application[];
  username: string;
  private sub: any;

  ngOnInit(): void {
<<<<<<< HEAD
    if (this.sessServ.verifySession()) {
      this.getSessionInfo('Company');
      this.username = localStorage.getItem("username");
    } else {
      window.location.href = '/login';
    }
    this.getAllMyApplications();
=======
      if(this.sessServ.verifySession()){
          this.username = localStorage.getItem("username");
      } else {
        window.location.href = '/login';
      }
      this.getAllMyApplications();
>>>>>>> 95bc4520c4b9c62387ee704525bf2cd194ef3b1c
  }

  //Checks that the logged in user has access privileges to this component.
  getSessionInfo(userRole: string) {
    if (!this.sessServ.verifyUserRole(userRole)) {
      window.alert('You do not have access to this page');
      this.router.navigate(['/']);
    }
  }

  //Gets all of the applications submitted by the logged in user.
  getAllMyApplications(): void {
    let thisArray: Application[];
    this.viewAppServ.retrieveAllApplicantions(this.username).subscribe(
      response => {
<<<<<<< HEAD
        thisArray = Object.values(response);
        this.applications = thisArray;
        console.log(this.applications);
=======
      thisArray = Object.values(response);
      this.applications = thisArray;
>>>>>>> 95bc4520c4b9c62387ee704525bf2cd194ef3b1c
      }
    )
  }
}
