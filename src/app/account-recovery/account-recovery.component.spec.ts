import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { AccountRecoveryService } from '../services/account-recovery.service';

import { AccountRecoveryComponent } from './account-recovery.component';
import { HttpClient } from '@angular/common/http';

describe('AccountRecoveryComponent', () => {

  class MockService{
    accRecover(){}
  }

  let dummyForm = new FormGroup({
    email: new FormControl('ryancurley72@gmail.com')
  })

  let router:Router;
  let component: AccountRecoveryComponent;
  let fixture: ComponentFixture<AccountRecoveryComponent>;
  let accrecoverServ: AccountRecoveryService;
  let mockClient: {get: jasmine.Spy, post: jasmine.Spy, update: jasmine.Spy, delete: jasmine.Spy};

  beforeEach( () => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [ AccountRecoveryComponent ],
      providers: [
        {provide: AccountRecoveryService, userClass: MockService},
        {provide: HttpClient, useValue: mockClient}
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AccountRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.inject(Router);
    accrecoverServ = TestBed.inject(AccountRecoveryService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have h3 say greeting', () =>{
    fixture.detectChanges();
    let recoverHead = fixture.debugElement.query(By.css('h3')).nativeElement;
    console.log(recoverHead);
    expect(recoverHead.innerHTML).toBe('Please Enter the Email Associated with Your Account');
  });

  it('should call the recoverAccount() method', waitForAsync(()=>{
    let recoverButton = fixture.debugElement.query(By.css('#recoverAccount')).nativeElement;
    spyOn(component, 'recoverAccount').withArgs(dummyForm);
    recoverButton.click();

    fixture.whenStable().then(()=>{
      expect(component.recoverAccount).toHaveBeenCalled();
    });
  }));

});
