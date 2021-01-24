import { TestBed } from '@angular/core/testing';

import { ViewApplicantsService } from './view-applicants.service';

describe('ViewApplicantsService', () => {
  let service: ViewApplicantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewApplicantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
