import { Component, OnInit } from '@angular/core';
import { Item } from 'src/modules/app/models/Item';
import { FoodEditModalComponent } from '../../modals/food-edit-modal/food-edit-modal.component';
import { ManagerService } from '../../services/manager.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [MdbModalService]
})
export class MenuComponent implements OnInit {
  menuItems : Item[] = [];
  modalRef: MdbModalRef<FoodEditModalComponent>
  searchTerm: string;
  term: string;

  constructor(private managerService : ManagerService, private modalService: MdbModalService) { }

  ngOnInit(): void {
    this.managerService.getAllMenuItems().subscribe(
      (response) => {
        this.menuItems = response;
    });
  }

  openModal(meal: Item) {
    this.modalRef = this.modalService.open(FoodEditModalComponent, { data: { meal: meal }
  });
  }

}
