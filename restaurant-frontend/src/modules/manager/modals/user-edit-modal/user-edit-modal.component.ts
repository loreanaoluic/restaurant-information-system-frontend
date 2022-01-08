import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { NewUser } from 'src/modules/app/models/NewUser';
import { UpdateUser } from 'src/modules/app/models/updateUser';
import { User } from 'src/modules/app/models/User';
import { UserService } from 'src/modules/app/services/user.service';

@Component({
  selector: 'app-user-edit-modal',
  templateUrl: './user-edit-modal.component.html',
  styleUrls: ['./user-edit-modal.component.scss'],
})
export class UserEditModalComponent implements OnInit {
  user: User;

  constructor(
    public modalRef: MdbModalRef<UserEditModalComponent>,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  saveChanges() {
    const updatedUser = new NewUser(
      (<HTMLInputElement>document.getElementById('role')).value,
      (<HTMLInputElement>document.getElementById('name')).value,
      (<HTMLInputElement>document.getElementById('lastName')).value,
      (<HTMLInputElement>document.getElementById('emailAddress')).value,
      (<HTMLInputElement>document.getElementById('username')).value,
      this.user.password,
      (<HTMLInputElement>document.getElementById('salary')).value
    );
    this.userService.update(updatedUser);
    window.location.reload();
  }
}
