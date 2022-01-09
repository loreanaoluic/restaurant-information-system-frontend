import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { RestaurantTable } from 'src/modules/app/models/RestaurantTable';
import { ManagerService } from '../../services/manager.service';

@Component(
  { selector: 'app-modal',
  templateUrl: './add-table-modal.component.html',
  styleUrls: ['./add-table-modal.component.scss']
})
export class AddTableModalComponent {
  tableShape: string = "SQUARE";

  constructor(public modalRef: MdbModalRef<AddTableModalComponent>, private managerService: ManagerService) {}

  onChange(value: any) {
    if (value.id === "squareTable") {
      this.tableShape = "SQUARE";
    }
    if (value.id === "roundTable") {
      this.tableShape = "ROUND";
    }
    if (value.id === "bar") {
      this.tableShape = "BAR";
    }
  }
  addTable() {
      const restaurantTable = new RestaurantTable("NOT_OCCUPIED", this.tableShape, 0, 0);
      this.managerService.addRestaurantTable(restaurantTable);
      window.location.reload();
  }
}