import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ViewApplicationsService } from '../services/view-applications.service';
import {RouterTestingModule} from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ViewApplicationsComponent } from './view-applications.component';

describe('ViewApplicationsComponent', () => {
  //I have mocked the Service
  class MockService {
    retrieveAllApplicantions(username) {}
  }

  let dummyApplicationData = {
    jobPostingTitle : "Awesome Professional",
    companyName : "GreatCompany",
    status : "Pending",
    date : "2021-01-31",
    username : "olgamelnikoff"
  }

  let router : Router;
  let applicationService : ViewApplicationsService;
  
  let component: ViewApplicationsComponent;
  let fixture: ComponentFixture<ViewApplicationsComponent>;

  //mocking our client entirely (another way to mock our client)  
let mockClient: {get: jasmine.Spy, post: jasmine.Spy, put: jasmine.Spy, delete: jasmine.Spy}


beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [
      RouterTestingModule.withRoutes([],)

    ],
    declarations: [ ViewApplicationsComponent ],
    providers : [
      {provide: ViewApplicationsService, useClass: MockService},
      {provide: HttpClient, useValue: mockClient}
    ]
  })
  .compileComponents();
  fixture = TestBed.createComponent(ViewApplicationsComponent); //creates our component 
  //and assignes it to variable fixture;
  component = fixture.componentInstance;
  console.log(typeof(component));
  fixture.detectChanges();
  router = TestBed.inject(Router);
  applicationService = TestBed.inject(ViewApplicationsService);
  mockClient = TestBed.get(HttpClient);

  //I want to make sure there is a default situation
  //component.hasPoke = false;
});

//UNCOMMENT AT THE END
  /* it('should create', () => {
    expect(component).toBeTruthy();
  }); */

  it ("Should call the getAllMyApplications()  method", waitForAsync (() => {
    fixture.detectChanges();
    //let newTable = fixture.debugElement.query(By.css('#applicationsTable')).nativeElement;
    //spyOn(component, 'getAllMyApplications');
    //pokeButton.click();

    fixture.whenStable().then(() => {
    expect(component.getAllMyApplications).toHaveBeenCalled();
  });
  }));
});
