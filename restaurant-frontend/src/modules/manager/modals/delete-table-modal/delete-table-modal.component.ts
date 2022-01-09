import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { RestaurantTable } from 'src/modules/app/models/RestaurantTable';
import { ManagerService } from '../../services/manager.service';

@Component(
  { selector: 'app-modal',
  templateUrl: './delete-table-modal.component.html',
  styleUrls: ['./delete-table-modal.component.scss']
})
export class DeleteTableModalComponent {
  tables: RestaurantTable[] = [];

  constructor(public modalRef: MdbModalRef<DeleteTableModalComponent>, private managerService: ManagerService) {}

  deleteTable(id: number) {
    this.managerService.deleteRestaurantTable(id);
    window.location.reload();
  }

}