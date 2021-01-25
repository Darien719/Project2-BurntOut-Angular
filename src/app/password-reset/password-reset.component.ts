import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PasswordResetService } from '../services/password-reset.service';
import { UserCreds } from '../services/usercreds';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  username:string;
  password: string;
  userCred:UserCreds = {'username':'', 'password':''};

  resetgroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private passServ: PasswordResetService) { }

  passReset(info: FormGroup){
    this.userCred.username = info.get('username').value;
    this.userCred.password = info.get('password').value;
    this.passServ.resetPass(this.userCred).subscribe(
      response =>{
        console.log(response);
        console.log('successful reset');
        window.location.href='/login';
      },
      error =>{
        console.log(error);
        console.log('issues');
        window.location.href='/login'
      }
    )
  }

  ngOnInit(): void {
  }

}
