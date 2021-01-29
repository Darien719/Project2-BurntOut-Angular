import { TestBed } from '@angular/core/testing';
import { ViewApplicationsService } from './view-applications.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

const dummyApplicationData = {
  jobPostingTitle : "Awesome Professional",
  companyName : "GreatCompany",
  status : "Pending",
  date : "2021-01-31",
  username : "olgamelnikoff"
}

describe('ViewApplicationsService', () => {
  let service: ViewApplicationsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ViewApplicationsService],
    });
    service = TestBed.inject(ViewApplicationsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  }); 

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('should have retrieveAllApplicantions(username) return data', () => {
    service.retrieveAllApplicantions("olgamelnikoff").subscribe((res) => {
      expect(res.toString()).toEqual(dummyApplicationData.toString());
    })

    const req = httpMock.expectOne("http://localhost:9025/application/user/olgamelnikoff");
    expect(req.request.method).toBe('GET');
    req.flush(dummyApplicationData);

  });
});
