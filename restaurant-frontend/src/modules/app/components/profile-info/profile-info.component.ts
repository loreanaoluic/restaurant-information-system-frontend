import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
    private modalService: MdbModalService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser()!;
  }

  saveChanges(){
    if (
      (<HTMLInputElement>document.getElementById("name")).value === "" ||
      (<HTMLInputElement>document.getElementById("lastName")).value === "" ||
      (<HTMLInputElement>document.getElementById("emailAddress")).value === "") {

        this.toastrService.error('All fields must be filled!');

    } else {
    
      this.user.name = (<HTMLInputElement>document.getElementById("name")).value;
      this.user.lastName = (<HTMLInputElement>document.getElementById("lastName")).value;
      this.user.emailAddress = (<HTMLInputElement>document.getElementById("emailAddress")).value;
      
      this.userService.update(this.user);
      window.location.href = 'http://localhost:4200/login';
    }
  }

  openModal() {
    this.modalRef = this.modalService.open(ChangePasswordModalComponent, { data: { user: this.user }
  });
  }
}