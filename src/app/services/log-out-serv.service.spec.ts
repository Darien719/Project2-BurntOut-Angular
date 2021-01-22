import { TestBed } from '@angular/core/testing';

import { LogOutServService } from './log-out-serv.service';

describe('LogOutServService', () => {
  let service: LogOutServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogOutServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
