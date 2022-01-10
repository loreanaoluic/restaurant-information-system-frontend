import { Component, OnInit } from '@angular/core';
import { Item } from 'src/modules/app/models/Item';
import { FoodEditModalComponent } from '../../modals/food-edit-modal/food-edit-modal.component';
import { ManagerService } from '../../services/manager.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { AuthService } from 'src/modules/app/services/auth.service';

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
  currentRole : any = "";

  constructor(private managerService : ManagerService, private modalService: MdbModalService, 
    private authService : AuthService) { }

  ngOnInit(): void {
    this.currentRole = this.authService.getCurrentUser()?.dtype;
    this.managerService.getAllMenuItems().subscribe(
      (response) => {
        this.menuItems = response;
    });
  }

  openModal(meal: Item) {
    this.modalRef = this.modalService.open(FoodEditModalComponent, { data: { meal: meal }
  });
  }

  order(item: Item) {
    this.managerService.orderMeal(item);
  }

}
