import { Component, OnInit } from '@angular/core';
import { User } from 'src/modules/app/models/User';
import { AuthService } from 'src/modules/app/services/auth.service';
import { ManagerService } from '../../services/manager.service';
import { Request } from 'src/modules/app/models/Request';
import { RequestInfoModalComponent } from '../../modals/request-info-modal/request-info-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-item-requests',
  templateUrl: './item-requests.component.html',
  styleUrls: ['./item-requests.component.scss'],
  providers: [MdbModalService]
})
export class ItemRequestsComponent implements OnInit {
  requests : Request[] = [];
  modalRef: MdbModalRef<RequestInfoModalComponent>

  constructor(private managerService : ManagerService, private authService : AuthService,
    private modalService: MdbModalService) { }

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

  openModal(request: Request) {
    this.modalRef = this.modalService.open(RequestInfoModalComponent, { data: { request : request }
  });
  }

}
