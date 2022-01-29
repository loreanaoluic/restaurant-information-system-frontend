import { Component, OnInit } from '@angular/core';
import { Item } from 'src/modules/app/models/Item';
import { ManagerService } from '../../services/manager.service';
import { DrinkEditModalComponent } from '../../modals/drink-edit-modal/drink-edit-modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { AuthService } from 'src/modules/app/services/auth.service';

@Component({
  selector: 'app-drink-card',
  templateUrl: './drink-card.component.html',
  styleUrls: ['./drink-card.component.scss'],
  providers: [MdbModalService]
})
export class DrinkCardComponent implements OnInit {
  drinks : Item[] = [];
  modalRef: MdbModalRef<DrinkEditModalComponent>
  searchTerm: string;
  term: string;
  currentRole : any = "";

  constructor(private managerService : ManagerService, private modalService: MdbModalService, 
    private authService : AuthService) { }

  ngOnInit(): void {
    this.currentRole = this.authService.getCurrentUser()?.dtype;
    this.managerService.getAllDrinkCardItems().subscribe(
      (response) => {
        this.drinks = response;
    });
  }

  openModal(drink: Item) {
    this.modalRef = this.modalService.open(DrinkEditModalComponent, { data: { drink : drink }
  });
  }

  order(item: Item) {
    this.managerService.orderDrink(item);
  }

}
