import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInUserNavBarComponent } from './navigation-bar.component';

describe('NavigationBarComponent', () => {
  let component: LoggedInUserNavBarComponent;
  let fixture: ComponentFixture<LoggedInUserNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedInUserNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInUserNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
