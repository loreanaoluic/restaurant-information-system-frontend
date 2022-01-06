import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../../models/User';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {
  user : User;

  constructor(
    private authService : AuthService,
    private userService : UserService,
  ) {
    this.user = this.authService.getCurrentUser()!;
  }

  ngOnInit(): void {}

  update(user: User){
    this.user = user;    
  }

  storeChanges(){
    console.log(this.user);
    
    this.userService.update(this.user);
  }

  setRoleForTitle(){
    return this.user.dtype;
  }
}
