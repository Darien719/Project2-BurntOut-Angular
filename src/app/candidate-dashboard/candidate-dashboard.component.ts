import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-candidate-dashboard',
  templateUrl: './candidate-dashboard.component.html',
  styleUrls: ['./candidate-dashboard.component.css']
})
export class CandidateDashboardComponent implements OnInit {

  constructor(private sessServ: SessionService) { }

  ngOnInit(): void {
    if(this.sessServ.verifySession()){

    } else {
      window.location.href = '/login';
    }
  }

}
