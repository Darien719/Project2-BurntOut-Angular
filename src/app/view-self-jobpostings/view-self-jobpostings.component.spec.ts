import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSelfJobpostingsComponent } from './view-self-jobpostings.component';

describe('ViewSelfJobpostingsComponent', () => {
  let component: ViewSelfJobpostingsComponent;
  let fixture: ComponentFixture<ViewSelfJobpostingsComponent>;

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
