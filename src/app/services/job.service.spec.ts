import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { JobService } from './job.service';

const dummyJobPostingData = {

  title : "Awesome Professional",
  description : "Funny description",
  tagsList : ["perfect", "amazing"],
  tagNames: "perfectamazing",
  postingId : 5,
  locationName: "Reston,VA",
  companyName: "The Greatest Company Ever",
  industryName: "IT",
  poster_id: 5
}
describe('JobService', () => {
  let service: JobService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [JobService],

    });
    service = TestBed.inject(JobService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  }); 

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('should have retrieveAllJobs() return data', () => {
    service.retrieveAllJobs().subscribe((res) => {
      expect(res.toString()).toEqual(dummyJobPostingData.toString());
    })

    const req = httpMock.expectOne("http://ec2-13-52-246-229.us-west-1.compute.amazonaws.com:9025/jobpostings/all");
    expect(req.request.method).toBe('GET');
    req.flush(dummyJobPostingData);
  });
});
