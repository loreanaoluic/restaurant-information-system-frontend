import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { User } from 'src/modules/app/models/User';
import { UserService } from 'src/modules/app/services/user.service';
import { DrinkEditModalComponent } from '../drink-edit-modal/drink-edit-modal.component';

@Component({
  selector: 'app-user-edit-modal',
  templateUrl: './user-edit-modal.component.html',
  styleUrls: ['./user-edit-modal.component.scss'],
})
export class UserEditModalComponent implements OnInit {
  user: User;

  constructor(
    public modalRef: MdbModalRef<DrinkEditModalComponent>,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  saveChanges() {
    if ((<HTMLInputElement>document.getElementById('username')).value !== '') {
      this.user.username = (<HTMLInputElement>(
        document.getElementById('username')
      )).value;
    }
    if ((<HTMLInputElement>document.getElementById('name')).value !== '') {
      this.user.name = (<HTMLInputElement>(
        document.getElementById('name')
      )).value;
    }
    if ((<HTMLInputElement>document.getElementById('lastname')).value !== '') {
      this.user.lastName = (<HTMLInputElement>(
        document.getElementById('lastname')
      )).value;
    }
    if ((<HTMLInputElement>document.getElementById('email')).value !== '') {
      this.user.emailAddress = (<HTMLInputElement>(
        document.getElementById('email')
      )).value;
    }
    if ((<HTMLInputElement>document.getElementById('salary')).value !== '') {
      this.user.salary = Number(
        (<HTMLInputElement>document.getElementById('salary')).value
      );
    }
    if ((<HTMLInputElement>document.getElementById('role')).value !== '') {
      this.user.dtype = (<HTMLInputElement>(
        document.getElementById('role')
      )).value;
    }

    this.userService.update(this.user);
  }
}
