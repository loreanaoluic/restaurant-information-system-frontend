import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { RestaurantTable } from 'src/modules/app/models/RestaurantTable';
import { ManagerService } from '../../services/manager.service';
import { Router } from '@angular/router';

@Component(
  { selector: 'app-modal',
  templateUrl: './delete-table-modal.component.html',
  styleUrls: ['./delete-table-modal.component.scss']
})
export class DeleteTableModalComponent {
  tables: RestaurantTable[] = [];

  constructor(public modalRef: MdbModalRef<DeleteTableModalComponent>, private managerService: ManagerService,
    private router: Router) {}

  deleteTable(id: number) {
    this.managerService.deleteRestaurantTable(id);
    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/manager/table']);
    });
  }

}