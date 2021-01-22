import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.css']
})
export class CompanyDashboardComponent implements OnInit {

  constructor(private sessServ: SessionService) { }

  ngOnInit(): void {
    if(this.sessServ.verifySession()){

    } else {
      window.location.href = '/login';
    }
  }

}
