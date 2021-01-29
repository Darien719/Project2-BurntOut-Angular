import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PasswordResetService } from '../services/password-reset.service';

import { PasswordResetComponent } from './password-reset.component';

describe('PasswordResetComponent', () => {

  class MockService{
    resetPass(){}
  }

  let dummyForm = new FormGroup({
    username: new FormControl('000000'),
    password: new FormControl('password')
  })

  let router:Router;
  let component: PasswordResetComponent;
  let fixture: ComponentFixture<PasswordResetComponent>;
  let passresetServ: PasswordResetService;
  let mockClient: {get: jasmine.Spy, post: jasmine.Spy, update: jasmine.Spy, delete: jasmine.Spy};

  beforeEach( () => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      declarations: [ PasswordResetComponent ],
      providers: [
        {provide: PasswordResetService, userClass: MockService},
        {provide: HttpClient, useValue: mockClient}
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(PasswordResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.inject(Router);
    passresetServ = TestBed.inject(PasswordResetService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have h3 say greeting', () =>{
    fixture.detectChanges();
    let resetHead = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(resetHead.innerHTML).toBe('Please Enter Your Security Code and New Password');
  });

  it('should call the passReset() method', waitForAsync(()=>{
    let resetButton = fixture.debugElement.query(By.css('#passReset')).nativeElement;
    spyOn(component, 'passReset').withArgs(dummyForm);
    resetButton.click();

    fixture.whenStable().then(()=>{
      expect(component.passReset).toHaveBeenCalled();
    });
  }));

});
