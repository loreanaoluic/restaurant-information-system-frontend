import { Component, OnInit } from '@angular/core';
import { User } from 'src/modules/app/models/User';
import { UserService } from '../../../app/services/user.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss'],
})
export class EmployeeCreateComponent implements OnInit {
  _role = '';
  _salary = 0;
  _password = '';
  _password2 = '';
  _email = '';
  _surname = '';
  _name = '';
  _username = '';

  user: User | undefined;
  message!: string;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  PotvrdiClick() {
    this.user = {
      dtype: this._role,
      name: this._name,
      lastName: this._surname,
      emailAddress: this._email,
      username: this._username,
      password: this._password,
      salary: this._salary,
      deleted: false,
    };
    this.userService.create(this.user);
  }
}
