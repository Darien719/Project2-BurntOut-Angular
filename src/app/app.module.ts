import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { RouterModule } from '@angular/router';
import { CandidateDashboardComponent } from './candidate-dashboard/candidate-dashboard.component';
import { SearchForJobComponent } from './search-for-job/search-for-job.component';
import { JobService } from './services/job.service';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CreateJobPostingComponent } from './create-job-posting/create-job-posting.component';
import { BlogComponent } from './blog/blog.component';
import { BlogService } from './services/blog.service';
import { CreateJobService } from './services/create-job.service';
import { ApplicationFormPageComponent } from './application-form-page/application-form-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyDashboardComponent,
    CandidateDashboardComponent,
    SearchForJobComponent,
    LoginComponent,
    HomePageComponent,
    NavigationBarComponent,
    SignUpComponent,
    CreateJobPostingComponent,
    BlogComponent,
    ApplicationFormPageComponent

  ],
  imports: [
    BrowserModule, RouterModule.forRoot([

      { path: "company-dashboard", component: CompanyDashboardComponent },
      { path: "candidate-dashboard", component: CandidateDashboardComponent },
      { path: "jobs", component: SearchForJobComponent },
      { path: "login", component: LoginComponent },
      { path: "sign-up", component: SignUpComponent },
      { path: "create-posting", component: CreateJobPostingComponent },
      { path: "blog", component: BlogComponent },
      { path: "jobs/application", component: ApplicationFormPageComponent },
      { path: "**", component: HomePageComponent },

    ]), HttpClientModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [JobService, LoginService, BlogService, CreateJobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
