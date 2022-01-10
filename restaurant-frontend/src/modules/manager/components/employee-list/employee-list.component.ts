import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { User } from 'src/modules/app/models/User';
import { AuthService } from 'src/modules/app/services/auth.service';
import { WebSocketService } from 'src/modules/app/services/WebSocketService';
import { NewUserModalComponent } from '../../modals/new-user-modal/new-user-modal.component';
import { UserEditModalComponent } from '../../modals/user-edit-modal/user-edit-modal.component';
import { ManagerService } from '../../services/manager.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  providers: [MdbModalService],
})
export class EmployeeListComponent implements OnInit {
  users: User[] = [];
  modalRef: MdbModalRef<UserEditModalComponent>;
  searchTerm: string;
  term: string;

  public notifications = 0;

  constructor(
    private webSocketService: WebSocketService,
    private managerService: ManagerService,
    private authService: AuthService,
    private modalService: MdbModalService,
    private toastrService: ToastrService
  ) {
    // Open connection with server socket
    let stompClient = this.webSocketService.connect();
    stompClient.connect({}, () => {
      // Subscribe to notification topic
      stompClient.subscribe(
        '/topic/notification',
        (notifications: { body: string }) => {
          // Update notifications attribute with the recent messsage sent from the server
          this.notifications = JSON.parse(notifications.body).count;
          this.toastrService.success('Dobili ste novu notifikaciju!');
        }
      );
    });
  }

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

  openCreateModal() {
    this.modalRef = this.modalService.open(NewUserModalComponent);
  }

  deleteUser(username: string) {
    this.managerService.deleteUser(username);
    window.location.reload();
  }
}
