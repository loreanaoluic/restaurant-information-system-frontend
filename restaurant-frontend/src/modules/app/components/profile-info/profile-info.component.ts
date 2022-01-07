import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from '../../models/User';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss'],
})
export class ProfileInfoComponent implements OnInit {
  user: User;
  form: FormGroup;
  fb: FormBuilder;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {
    this.user = this.authService.getCurrentUser()!;
    this.fb = new FormBuilder();
    this.form = this.fb.group({
      username: [this.user.username], //Validators.required
      name: [this.user.name], //Validators.compose([Validators.required, Validators.pattern("[A-Za-z0-9]{1,20}")])
      lastName: [this.user.lastName], //Validators.compose([Validators.required, Validators.pattern("[A-Za-z0-9]{1,20}")])
      email: [this.user.emailAddress], //Validators.compose([Validators.required, Validators.pattern("[A-Za-z0-9]+@[A-Za-z0-9]\.[a-z]{3}")])
    });
  }

  ngOnInit(): void {}

  storeChanges() {
    this.user.emailAddress = this.form.value.email;
    this.user.name = this.form.value.name;
    this.user.lastName = this.form.value.lastName;
    this.user.username = this.form.value.username;
    if (this.form.value.password1 == this.form.value.password2)
      this.userService.update(this.user);
  }

  setRoleForTitle() {
    return this.user.dtype;
  }
}
