import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../services/manager.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { AddTableModalComponent } from '../../modals/add-table-modal/add-table-modal.component';
import { DeleteTableModalComponent } from '../../modals/delete-table-modal/delete-table-modal.component';
import { RestaurantTable } from 'src/modules/app/models/RestaurantTable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [MdbModalService]
})
export class TableComponent implements OnInit {
  modalRef: MdbModalRef<AddTableModalComponent>
  tables: RestaurantTable[] = [];

  constructor(private managerService : ManagerService, private modalService: MdbModalService) { }

  ngOnInit(): void {
    this.managerService.getAllRestaurantTables().subscribe((response) => {
      this.tables = response;
    });
  }

  openAddModal() {
    this.modalRef = this.modalService.open(AddTableModalComponent);
  }

  openDeleteModal() {
    this.modalRef = this.modalService.open(DeleteTableModalComponent, { data: { tables: this.tables }
    });
  }

  onDragEnded(event: any, table: RestaurantTable) {
    const offset = { ...(<any>event.source._dragRef)._passiveTransform };
    const positionX = table.coordinateX + offset.x;
    const positionY = table.coordinateY + offset.y;
    table.coordinateX = positionX;
    table.coordinateY = positionY;
    this.managerService.updateRestaurantTable(table);
    this.ngOnInit();
  }

}
