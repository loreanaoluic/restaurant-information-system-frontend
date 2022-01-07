import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Item } from 'src/modules/app/models/Item';
import { ManagerService } from '../../services/manager.service';

@Component(
  { selector: 'app-modal',
  templateUrl: './drink-edit-modal.component.html',
  styleUrls: ['./drink-edit-modal.component.scss']
})
export class DrinkEditModalComponent {
  drink: Item;

  constructor(public modalRef: MdbModalRef<DrinkEditModalComponent>, private managerService: ManagerService) {}

  saveChanges() {
    if ((<HTMLInputElement>document.getElementById("itemName")).value !== "") {
      this.drink.name = (<HTMLInputElement>document.getElementById("itemName")).value;
    }
    if ((<HTMLInputElement>document.getElementById("ingredients")).value !== "") {
      this.drink.ingredients = (<HTMLInputElement>document.getElementById("ingredients")).value;
    }
    if ((<HTMLInputElement>document.getElementById("description")).value !== "") {
      this.drink.description = (<HTMLInputElement>document.getElementById("description")).value;
    }
    if ((<HTMLInputElement>document.getElementById("price")).value !== "") {
      this.drink.price.value = Number((<HTMLInputElement>document.getElementById("price")).value);
    }

    this.managerService.updateDrinkCardItem(this.drink);
  }
}