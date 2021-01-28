import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { SignupService } from '../services/signup.service';
import { User } from '../services/user';

import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  
  class MockService {
    postNewUser(user: User) { }
  }
  
  let dummySingnUpInfo = {
    firstName: 'John',
    lastName: 'Jacobelli',
    email: 'johnjacobelli@email.com',
    userRole: 'Candidate',
    company: '',
    username: 'johnjacobelli',
    password: 'password',
  }


  let router: Router;
  let signUpServ: SignupService;
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let mockClient: {get: jasmine.Spy, post: jasmine.Spy, put: jasmine.Spy, delete: jasmine.Spy};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      providers: [{provide: SignupService, useClass: MockService}, 
                  {provide: HttpClient, useValue: mockClient}],
      declarations: [ SignUpComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.inject(Router);
    signUpServ = TestBed.inject(SignupService);
    mockClient = TestBed.get(HttpClient);
    component.errorOccurred = false;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have pageTitle say Register for BurntOut!", () => {
    fixture.detectChanges();
    let pageTitle = fixture.debugElement.query(By.css("h1")).nativeElement;
    expect(pageTitle.innerHTML).toBe("Register for BurntOut!");
  });
});
