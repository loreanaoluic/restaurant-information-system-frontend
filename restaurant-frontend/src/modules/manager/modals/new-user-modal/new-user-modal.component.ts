import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { NewUser } from 'src/modules/app/models/NewUser';
import { User } from 'src/modules/app/models/User';
import { UserService } from 'src/modules/app/services/user.service';

@Component({
  selector: 'app-new-user-modal',
  templateUrl: './new-user-modal.component.html',
  styleUrls: ['./new-user-modal.component.scss'],
})
export class NewUserModalComponent implements OnInit {
  constructor(
    public modalRef: MdbModalRef<NewUserModalComponent>,
    private userService: UserService
  ) {}

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
    window.location.reload();
  }
}
