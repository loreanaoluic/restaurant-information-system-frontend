import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/User';
import { AuthService } from '../../services/auth.service';
import { Token } from 'src/modules/app/models/Token';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {
  user : User;

  constructor (private authService : AuthService, private userService : UserService) { }

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser()!;
  }

  saveChanges(){
    if ((<HTMLInputElement>document.getElementById("name")).value !== "") {
      this.user.name = (<HTMLInputElement>document.getElementById("name")).value;
    }
    if ((<HTMLInputElement>document.getElementById("lastName")).value !== "") {
      this.user.lastName = (<HTMLInputElement>document.getElementById("lastName")).value;
    }
    if ((<HTMLInputElement>document.getElementById("emailAddress")).value !== "") {
      this.user.emailAddress = (<HTMLInputElement>document.getElementById("emailAddress")).value;
    }
    
    this.userService.update(this.user);
    window.location.href = 'http://localhost:4200/login';
  }
}
