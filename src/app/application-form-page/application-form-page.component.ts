import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-application-form-page',
  templateUrl: './application-form-page.component.html',
  styleUrls: ['./application-form-page.component.css']
})
export class ApplicationFormPageComponent implements OnInit {

  constructor(private sessServ:SessionService) { }

  ngOnInit(): void {
    if(this.sessServ.verifySession()){

    } else {
      window.location.href = '/login';
    }
  }

}
