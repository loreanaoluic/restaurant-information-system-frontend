import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { NewUser } from 'src/modules/app/models/NewUser';
import { UserService } from 'src/modules/app/services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-new-user-modal',
  templateUrl: './new-user-modal.component.html',
  styleUrls: ['./new-user-modal.component.scss'],
})
export class NewUserModalComponent {
  constructor(
    public modalRef: MdbModalRef<NewUserModalComponent>,
    private userService: UserService, private router: Router, private toastrService: ToastrService
  ) {}

  public username = '';
  public role = '';
  public lastName = '';
  public emailAddress = '';
  public password = '';
  public salary = '';
  public password2 = '';
  public name = '';

  saveChanges() {
    const user = new NewUser(
      (<HTMLInputElement>document.getElementById('role')).value,
      (<HTMLInputElement>document.getElementById('name')).value,
      (<HTMLInputElement>document.getElementById('lastName')).value,
      (<HTMLInputElement>document.getElementById('emailAddress')).value,
      (<HTMLInputElement>document.getElementById('username')).value,
      (<HTMLInputElement>document.getElementById('password')).value,
      (<HTMLInputElement>document.getElementById('salary')).value
    );
    if (this.password==this.password2){
      this.userService.create(user);
      window.location.reload();
      }
    else
      this.toastrService.error('Passwords do not match!');
  }
}
