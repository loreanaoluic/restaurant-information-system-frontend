import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/User';
import { AuthService } from '../../services/auth.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { UserService } from '../../services/user.service';
import { ChangePasswordModalComponent } from '../../modals/change-password-modal/change-password-modal.component';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss'],
  providers: [MdbModalService]
})
export class ProfileInfoComponent implements OnInit {
  user : User;
  modalRef: MdbModalRef<ChangePasswordModalComponent>

  constructor (private authService : AuthService, private userService : UserService, 
    private modalService: MdbModalService) { }

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
    if ((<HTMLInputElement>document.getElementById("username")).value !== "") {
      this.user.username = (<HTMLInputElement>document.getElementById("username")).value;
    }
    
    this.userService.update(this.user);
    window.location.href = 'http://localhost:4200/login';
  }

  openModal() {
    this.modalRef = this.modalService.open(ChangePasswordModalComponent, { data: { user: this.user }
  });
  }
}