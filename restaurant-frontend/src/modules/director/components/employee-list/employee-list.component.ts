import { Component, OnInit } from '@angular/core';
import { User } from 'src/modules/app/models/User';
import { AuthService } from 'src/modules/app/services/auth.service';
import { ManagerService } from 'src/modules/manager/services/manager.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  users : User[] = [];

  constructor(private managerService : ManagerService, private authService : AuthService) { }

  ngOnInit(): void {
    this.managerService.getAllUsers().subscribe(
      (response) => {
        this.users = response;
        this.users = this.users.filter(user => {return user.username !== this.authService.getCurrentUser()?.username});
    });
  }

}
