import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project2-BurntOut';

  userRoleName:string="";

  constructor() { }

  ngOnInit(): void {
    this.userRoleName = JSON.parse(localStorage.getItem('user')).userRoleName;
  }
}
