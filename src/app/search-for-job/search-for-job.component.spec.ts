
import { SearchForJobComponent } from './search-for-job.component';
import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { JobService } from '../services/job.service';
import {RouterTestingModule} from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs';


fdescribe('SearchForJobComponent', () => {

  //I have mocked the Service
  class MockService {
    retrieveAllJobs(){

    }
  }
  const dummyJobPostingData = [{

    title : "Awesome Professional",
    description : "Funny description",
    tagsList : ["perfect", "amazing"],
    tagNames: "perfectamazing",
    postingId : 5,
    locationName: "Reston,VA",
    companyName: "The Greatest Company Ever",
    industryName: "IT",
    poster_id: 5
  },
  {

    title : "Just Another Great Professional",
    description : "Very funny description again",
    tagsList : ["perfect", "amazing"],
    tagNames: "perfectamazing",
    postingId : 6,
    locationName: "Reston,VA",
    companyName: "The Greatest Company Ever",
    industryName: "IT",
    poster_id: 5
  }
]

  let router : Router;
  let jobService : JobService;
  let searchField;


  //mocking our client entirely (another way to mock our client)  
let mockClient: {get: jasmine.Spy, post: jasmine.Spy, put: jasmine.Spy, delete: jasmine.Spy}


  let component: SearchForJobComponent;
  let fixture: ComponentFixture<SearchForJobComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([],)

      ],
      declarations: [ SearchForJobComponent ],
      providers: [
        {provide: JobService, useClass: MockService},
        {provide: HttpClient, useValue: mockClient}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    

    fixture = TestBed.createComponent(SearchForJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
    jobService = TestBed.inject(JobService);
    mockClient = TestBed.get(HttpClient);
    searchField = fixture.debugElement.query(By.css('input-field')).nativeElement;
    component.ngOnInit();
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ("Should call the getAllJobs() method", waitForAsync (() => {
    //spyOn(component, 'getAllJobs');
    component.ngOnInit();
    component.getAllJobs();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
    expect(component.getAllJobs).toHaveBeenCalled();
    });
  }));

  it ('should fetch all jobs data async', waitForAsync (() => {
    
     let jobServiceSpy = spyOn(jobService, 'retrieveAllJobs').and.returnValue
     (Observable.create(observer => {
    
      observer.next(dummyJobPostingData);
    }
    ));
        fixture.detectChanges();
        fixture.whenStable().then(() => {
        expect(component.jobs[0].description).toBe('Funny description');
      });
      }));
});
