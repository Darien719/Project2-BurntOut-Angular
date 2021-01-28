import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { JobService } from '../services/job.service';

import { ViewSelfJobpostingsComponent } from './view-self-jobpostings.component';

describe('ViewSelfJobpostingsComponent', () => {
  let component: ViewSelfJobpostingsComponent;
  let fixture: ComponentFixture<ViewSelfJobpostingsComponent>;
  let router: Router;
  let jobServ: JobService;
  let mockClient: {get: jasmine.Spy, post: jasmine.Spy, put:jasmine.Spy, delete: jasmine.Spy}
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSelfJobpostingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSelfJobpostingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

