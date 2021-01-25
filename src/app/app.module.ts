import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AccountRecoveryComponent } from './account-recovery/account-recovery.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationFormPageComponent } from './application-form-page/application-form-page.component';
import { BlogComponent } from './blog/blog.component';
import { CandidateDashboardComponent } from './candidate-dashboard/candidate-dashboard.component';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { CreateJobPostingComponent } from './create-job-posting/create-job-posting.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoggedInCompanyNavbarComponent } from './logged-in-company-navbar/logged-in-company-navbar.component';
import { LoggedInUserNavBarComponent } from './logged-in-user-navbar/navigation-bar.component';
import { LoggedOutNavbarComponent } from './logged-out-navbar/logged-out-navbar.component';
import { LoginComponent } from './login/login.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ReviewApplicantsComponent } from './review-applicants/review-applicants.component';
import { SearchForJobComponent } from './search-for-job/search-for-job.component';
import { BlogService } from './services/blog.service';
import { CreateJobService } from './services/create-job.service';
import { JobService } from './services/job.service';
import { LogOutServService } from './services/log-out-serv.service';
import { LoginService } from './services/login.service';
import { ViewApplicantsService } from './services/view-applicants.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ViewApplicationsComponent } from './view-applications/view-applications.component';
import { ViewSelfJobpostingsComponent } from './view-self-jobpostings/view-self-jobpostings.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyDashboardComponent,
    CandidateDashboardComponent,
    SearchForJobComponent,
    LoginComponent,
    HomePageComponent,
    LoggedInUserNavBarComponent,
    SignUpComponent,
    CreateJobPostingComponent,
    BlogComponent,
    ApplicationFormPageComponent,
    LoggedOutNavbarComponent,
    LoggedInCompanyNavbarComponent,
    ReviewApplicantsComponent,
    AccountRecoveryComponent,
    PasswordResetComponent,
    ViewSelfJobpostingsComponent,
    ViewApplicationsComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot([

      { path: "company-dashboard", component: CompanyDashboardComponent },
      { path: "candidate-dashboard", component: CandidateDashboardComponent },
      { path: "jobs", component: SearchForJobComponent },
      { path: "login", component: LoginComponent },
      { path: "recover", component: AccountRecoveryComponent },
      { path: "passwordreset", component: PasswordResetComponent },
      { path: "sign-up", component: SignUpComponent },
      { path: "create-posting", component: CreateJobPostingComponent },
      { path: "blog", component: BlogComponent },
      { path: "jobs/application", component: ApplicationFormPageComponent },
      { path: "jobs/review-applicants/:id", component: ReviewApplicantsComponent },
      { path: "company/view-postings", component: ViewSelfJobpostingsComponent},
      { path: "view-applications", component : ViewApplicationsComponent},
      { path: "**", component: HomePageComponent },

    ]), HttpClientModule, FormsModule, ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [JobService, LoginService, BlogService, CreateJobService, LogOutServService, ViewApplicantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
