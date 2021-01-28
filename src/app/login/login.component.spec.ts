import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { LoginService } from '../services/login.service';

import { LoginComponent } from './login.component';
import { FormControl, FormGroup } from '@angular/forms';

fdescribe('LoginComponent', () => {

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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
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
    console.log(loginHead);
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

  it('should call goHome() method if correct creds are passed', waitForAsync(()=>{
    let loginButton = fixture.debugElement.query(By.css('#loginPost')).nativeElement;
    spyOn(component, 'loginPost').withArgs(dummyForm);
    loginButton.click();
    fixture.whenStable().then(()=>{
      expect(component.goHome).toHaveBeenCalled();
    })
  }))

});
