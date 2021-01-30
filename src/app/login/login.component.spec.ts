import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { LoginService } from '../services/login.service';
import { LoginComponent } from './login.component';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { User } from '../services/user';

describe('LoginComponent', () => {

  class MockService{
    postLogin(){}
  }

  let dummyLoginData={
    username:'ryan',
    password:'pass321'
  }

  let dummyForm = new FormGroup({
    username: new FormControl('ryan'),
    password: new FormControl('pass321')
  })

  let router:Router;
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginService: LoginService;
  let mockClient: {get: jasmine.Spy, post: jasmine.Spy, update: jasmine.Spy, delete: jasmine.Spy}
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        [HttpClientTestingModule]
      ],
      declarations: [ LoginComponent ],
      providers: [
        {provide: LoginService, userClass: MockService},
        {provide: HttpClient, useValue: mockClient}
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.inject(Router);
    loginService = TestBed.inject(LoginService);
    mockClient = TestBed.get(HttpClient);
    httpMock = TestBed.get(HttpTestingController);
    
  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(LoginComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have h3 say Please Sign In', () =>{
    fixture.detectChanges();
    let loginHead = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(loginHead.innerHTML).toBe('Please Sign In');
  });

  it('should call the postLogin() method', waitForAsync(()=>{
    let loginButton = fixture.debugElement.query(By.css('#loginPost')).nativeElement;
    spyOn(component, 'loginPost').withArgs(dummyForm);
    loginButton.click();

    fixture.whenStable().then(()=>{
      expect(component.loginPost).toHaveBeenCalled();
    });
  }));

  // it('should route to recover when clicking Forgot Password', waitForAsync(()=>{
  //   let forgotPassButton = fixture.debugElement.query(By.css('#forgotPass')).nativeElement;
  //   forgotPassButton.click();

  //   fixture.whenStable().then(()=>{
  //     expect(location.pathname).toContain('recover');
  //   });
  // }));

  // it('should navigate to recover when "recover" is passed', waitForAsync(()=>{
  //   router.navigate(['recover']);
  //   tick(50);
  //   expect(location.pathname).toContain('recover');
  // }))

  // it('should post login data async', waitForAsync((done)=>{
  //   let response: User;
  //   let loginButton = fixture.debugElement.query(By.css('#loginPost')).nativeElement;
  //   spyOn(component, 'loginPost').withArgs(dummyForm);
  //   loginButton.click();

  //   fixture.detectChanges();
  //   fixture.whenStable().subscribe(()=>{
  //     expect(response).toContain("ryan");
  //   })
  // }));

});
