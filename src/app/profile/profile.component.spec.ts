import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { ProfileService } from '../services/profile.service';

import { ProfileComponent } from './profile.component';

fdescribe('ProfileComponent', () => {
  
  class MockService {
    retrieveUser(username: string) { }
  }
  
  let router: Router;
  let signUpServ: ProfileService;
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let mockClient: {get: jasmine.Spy, post: jasmine.Spy, put: jasmine.Spy, delete: jasmine.Spy};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), FormsModule],
      providers: [{provide: ProfileService, useClass: MockService}, 
                  {provide: HttpClient, useValue: mockClient}],
      declarations: [ ProfileComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.inject(Router);
    signUpServ = TestBed.inject(ProfileService);
    mockClient = TestBed.get(HttpClient);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have 'Profile' at the top of the screen", () => {
    fixture.detectChanges();
    let pageTitle = fixture.debugElement.query(By.css("h1")).nativeElement;
    expect(pageTitle.innerHTML).toBe("Profile");
  });

  it("should have everything hidden initially", () => {
    fixture.detectChanges();
    let warningMessage = fixture.debugElement.query(By.css("small")).nativeElement;
    expect(warningMessage.hasAttribute('hidden')).toEqual(true);
  });
  
  it("should have table titles", () => {
    fixture.detectChanges();
    let tableHeaders = fixture.debugElement.queryAll(By.css("th")); 
    expect(tableHeaders[0].nativeElement.innerHTML).toBe("Username");
    expect(tableHeaders[1].nativeElement.innerHTML).toBe("Company");
    expect(tableHeaders[2].nativeElement.innerHTML).toBe("Email");
    expect(tableHeaders[3].nativeElement.innerHTML).toBe("Role");
  });
  
  it("should not be in edit mode initially", () => {
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('form'))).toBeNull();
  });
});
