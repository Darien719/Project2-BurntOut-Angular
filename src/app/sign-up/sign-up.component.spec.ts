import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
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
      imports: [RouterTestingModule.withRoutes([]), FormsModule],
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
    let pageTitle = fixture.debugElement.query(By.css("#pageTitle")).nativeElement;
    expect(pageTitle.innerHTML).toBe("Register for BurntOut!");
  });

  it("should allow input", () => {
    fixture.detectChanges();
    let firstNameField = fixture.debugElement.query(By.css("#firstName")).nativeElement;
    let lastNameField = fixture.debugElement.query(By.css("#lastName")).nativeElement;
    let emailField = fixture.debugElement.query(By.css("#email")).nativeElement;
    let usernameField = fixture.debugElement.query(By.css("#username")).nativeElement;
    let passwordField = fixture.debugElement.query(By.css("#password")).nativeElement;

    firstNameField.value = dummySingnUpInfo.firstName;
    lastNameField.value = dummySingnUpInfo.lastName;
    emailField.value = dummySingnUpInfo.email;
    usernameField.value = dummySingnUpInfo.username;
    passwordField.value = dummySingnUpInfo.password;

    expect(firstNameField.value).toBe("John");
    expect(lastNameField.value).toBe("Jacobelli");
    expect(emailField.value).toBe("johnjacobelli@email.com");
    expect(usernameField.value).toBe("johnjacobelli");
    expect(passwordField.value).toBe("password");
  });

  it("should submit a new user", waitForAsync(() => {
    let submitButton = fixture.debugElement.query(By.css("button[type=submit]")).nativeElement;
    spyOn(component, "signUpPost");
    submitButton.click();

    fixture.whenStable().then(() => {
      expect(component.signUpPost).toHaveBeenCalled();
    });
  }));
  
});
