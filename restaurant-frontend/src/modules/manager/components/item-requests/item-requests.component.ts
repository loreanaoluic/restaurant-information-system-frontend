import { Component, OnInit } from '@angular/core';
import { User } from 'src/modules/app/models/User';
import { AuthService } from 'src/modules/app/services/auth.service';
import { ManagerService } from '../../services/manager.service';
import { Request } from 'src/modules/app/models/Request';

@Component({
  selector: 'app-item-requests',
  templateUrl: './item-requests.component.html',
  styleUrls: ['./item-requests.component.scss']
})
export class ItemRequestsComponent implements OnInit {
  requests : Request[] = [];

  constructor(private managerService : ManagerService, private authService : AuthService) { }

  ngOnInit(): void {
    this.managerService.getAllRequests().subscribe(
      (response) => {
        this.requests = response;
    });
  }

  acceptRequest(requestId: number) {
    this.managerService.acceptRequest(requestId);
    window.location.reload();
  }

  declineRequest(requestId: number) {
    this.managerService.declineRequest(requestId);
    window.location.reload();
  }

}
