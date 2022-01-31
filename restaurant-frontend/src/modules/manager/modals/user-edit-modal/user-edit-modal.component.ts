import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { NewUser } from 'src/modules/app/models/NewUser';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/modules/app/models/User';
import { UserService } from 'src/modules/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit-modal',
  templateUrl: './user-edit-modal.component.html',
  styleUrls: ['./user-edit-modal.component.scss'],
})
export class UserEditModalComponent {
  user: User;

  constructor(
    public modalRef: MdbModalRef<UserEditModalComponent>,
    private userService: UserService,
    private toastrService: ToastrService, private router: Router
  ) {}

  saveChanges() {
    if ((<HTMLInputElement>document.getElementById("role")).value == "" || 
    (<HTMLInputElement>document.getElementById("name")).value == "" ||
    (<HTMLInputElement>document.getElementById("lastName")).value == "" || 
    (<HTMLInputElement>document.getElementById("emailAddress")).value == "" ||
    (<HTMLInputElement>document.getElementById("username")).value == "" ||
    (<HTMLInputElement>document.getElementById("salary")).value == "") {

      this.toastrService.error('All fields must be filled!');

    } else {
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
      this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/manager/employees']);
      });
    }
  }
}
