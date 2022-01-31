import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { NewUser } from 'src/modules/app/models/NewUser';
import { User } from 'src/modules/app/models/User';
import { UserService } from 'src/modules/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user-modal',
  templateUrl: './new-user-modal.component.html',
  styleUrls: ['./new-user-modal.component.scss'],
})
export class NewUserModalComponent implements OnInit {
  constructor(
    public modalRef: MdbModalRef<NewUserModalComponent>,
    private userService: UserService, private router: Router
  ) {}

  public username: String = '';
  public role: String = '';
  public lastName: String = '';
  public emailAddress: String = '';
  public password: String = '';
  public salary: String = '';
  public password2: String = '';
  public name: String = '';

  ngOnInit(): void {}

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

    this.userService.create(user);
    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/manager/employees']);
    });
  }
}
