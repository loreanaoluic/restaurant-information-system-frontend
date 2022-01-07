import { Component, Inject, OnInit } from '@angular/core';
import { User } from 'src/modules/app/models/User';
import { AuthService } from 'src/modules/app/services/auth.service';
import { ManagerService } from '../../services/manager.service';
import { EmployeeUpdateComponent } from '../employee-update/employee-update.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  users: User[] = [];
  body = {};

  constructor(
    private managerService: ManagerService,
    private authService: AuthService
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
  displayStyle1 = 'none';
  openPopupCreate() {
    this.displayStyle = 'block';
  }
  openPopupUpdate(selectedUser: any) {
    this.displayStyle1 = 'block';
    console.log(selectedUser.name);
  }
  closePopupCreate() {
    this.displayStyle = 'none';
  }
  closePopupUpdate() {
    this.displayStyle1 = 'none';
  }
}
