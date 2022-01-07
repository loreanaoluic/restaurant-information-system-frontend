import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component(
  { selector: 'app-modal',
  templateUrl: './change-password-modal.component.html',
  styleUrls: ['./change-password-modal.component.scss']
})
export class ChangePasswordModalComponent {
  user : User;

  constructor(public modalRef: MdbModalRef<ChangePasswordModalComponent>, private userService: UserService) {}

  saveChanges() {
    if ((<HTMLInputElement>document.getElementById("password1")).value !== "" && 
    (<HTMLInputElement>document.getElementById("password1")).value === (<HTMLInputElement>document.getElementById("password2")).value) {
      this.user.password = (<HTMLInputElement>document.getElementById("password1")).value;
    }

    this.userService.update(this.user);
    window.location.href = 'http://localhost:4200/login';
  }
}