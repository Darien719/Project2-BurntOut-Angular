import { TestBed } from '@angular/core/testing';

import { CreateApplicationService } from './create-application.service';

describe('CreateApplicationService', () => {
  let service: CreateApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
