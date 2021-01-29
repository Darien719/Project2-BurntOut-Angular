import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { JobService } from '../services/job.service';
import { Job } from '../services/job';
import { JobPosting } from '../services/jobPosting';

import { ViewSelfJobpostingsComponent } from './view-self-jobpostings.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/internal/observable/of';

fdescribe('ViewSelfJobpostingsComponent', () => {
  let component: ViewSelfJobpostingsComponent;
  let fixture: ComponentFixture<ViewSelfJobpostingsComponent>;
  let router: Router;
  let jobServ: JobService;
  let mockClient: { get: jasmine.Spy, post: jasmine.Spy, put: jasmine.Spy, delete: jasmine.Spy };



  let mockedJob = [
    {
      postingId: "1",
      title: "Title1",
      description: "Description1"
    },
    {
      postingId: "2",
      title: "Title2",
      description: "Description2"
    }
  ]

  //Mocking the jobServ 
  let MockService = {
    retrieveJobsByCompany: <Observable>() => {
      return of(mockedJob);
    }
  }

  let user = {
    companyName: 'Revature'
  }


  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ ViewSelfJobpostingsComponent ]
  //   })
  //   .compileComponents();
  // });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        //We can make fake routes in here
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ViewSelfJobpostingsComponent],
      providers: [
        //Providing the mocks for the services being used, when you inject the left service, really inect the right service
        { provide: JobService, useValue: MockService },
        { provide: HttpClient, useValue: mockClient }
      ]

    })
      .compileComponents();


    fixture = TestBed.createComponent(ViewSelfJobpostingsComponent);
    component = fixture.componentInstance;

    router = TestBed.inject(Router);
    jobServ = TestBed.inject(JobService);
    mockClient = TestBed.get(HttpClient);
  });

  afterEach(() => {

  });

  it('should create', () => {
    spyOn(MockService, 'retrieveJobsByCompany').and.returnValue(of(mockedJob));
    expect(component).toBeTruthy();
  });

  it('retrieveJobsByCompany should get a job array and populate the table', () => {
    spyOn(MockService, 'retrieveJobsByCompany').and.returnValue(of(mockedJob));
    expect(component.jobs.toString() == mockedJob.toString());
  });

});

