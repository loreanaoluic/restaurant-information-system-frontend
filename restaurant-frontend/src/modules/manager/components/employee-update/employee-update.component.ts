import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { User } from 'src/modules/app/models/User';

import { UserService } from '../../../app/services/user.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { UserEditModalComponent } from '../../modals/user-edit-modal/user-edit-modal.component';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss'],
})
export class EmployeeUpdateComponent implements OnInit {
  @Input() updateUser: User;

  user: User;
  modalRef: MdbModalRef<EmployeeUpdateComponent>;

  constructor(
    private userService: UserService,
    private modalService: MdbModalService
  ) {}
  ngOnInit(): void {}

  openModal(user: User) {
    this.modalRef = this.modalService.open(UserEditModalComponent, {
      data: { user: user },
    });
  }
}
