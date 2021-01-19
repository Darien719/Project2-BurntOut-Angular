import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { RouterModule } from '@angular/router';
import { CandidateDashboardComponent } from './candidate-dashboard/candidate-dashboard.component';
import { SearchForJobComponent } from './search-for-job/search-for-job.component';
import { JobService } from './services/job.service';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CompanyDashboardComponent,
    CandidateDashboardComponent,
    SearchForJobComponent,
   
  ],
  imports: [
    BrowserModule, RouterModule.forRoot([
      {path: "company-dashboard", component: CompanyDashboardComponent},
      {path: "candidate-dashboard", component: CandidateDashboardComponent},
      {path: "jobs", component: SearchForJobComponent}
    ]), HttpClientModule, FormsModule,
    AppRoutingModule
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
