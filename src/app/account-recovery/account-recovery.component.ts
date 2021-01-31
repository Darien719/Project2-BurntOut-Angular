import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountRecoveryService } from '../services/account-recovery.service'

@Component({
  selector: 'app-account-recovery',
  templateUrl: './account-recovery.component.html',
  styleUrls: ['./account-recovery.component.css']
})
export class AccountRecoveryComponent implements OnInit {

  email: string = '';

  recovergroup = new FormGroup({
    email: new FormControl('')
  })

  constructor(private accServ: AccountRecoveryService) { }

  //Sends an email to recover an account.
  recoverAccount(details: FormGroup) {
    this.email = details.get('email').value;
    this.accServ.accRecover(this.email).subscribe(
      response => {
        window.alert("Email reset has been sent");
      },
      error => {
      }
    )
  }

  ngOnInit(): void {
  }

}
