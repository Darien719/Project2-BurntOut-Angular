import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInCompanyNavbarComponent } from './logged-in-company-navbar.component';

describe('LoggedInCompanyNavbarComponent', () => {
  let component: LoggedInCompanyNavbarComponent;
  let fixture: ComponentFixture<LoggedInCompanyNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedInCompanyNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInCompanyNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
