import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { User } from 'src/modules/app/models/User';
import { AuthService } from 'src/modules/app/services/auth.service';
import { UserEditModalComponent } from '../../modals/user-edit-modal/user-edit-modal.component';
import { ManagerService } from '../../services/manager.service';
import { EmployeeUpdateComponent } from '../employee-update/employee-update.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  providers: [MdbModalService],
})
export class EmployeeListComponent implements OnInit {
  users: User[] = [];
  user: User;
  modalRef: MdbModalRef<UserEditModalComponent>;

  constructor(
    private managerService: ManagerService,
    private authService: AuthService,
    private modalService: MdbModalService
  ) {}

  ngOnInit(): void {
    console.log(this.authService.getCurrentUser());

    this.managerService.getAllUsers().subscribe((response) => {
      this.users = response;
      this.users = this.users.filter((user) => {
        return user.username !== this.authService.getCurrentUser()?.username;
      });
    });
  }

  displayStyle = 'none';

  openModal(user: User) {
    this.modalRef = this.modalService.open(UserEditModalComponent, {
      data: { user: user },
    });
  }

  openPopupCreate() {
    this.displayStyle = 'block';
  }
  closePopupCreate() {
    this.displayStyle = 'none';
  }
}
