import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Item } from 'src/modules/app/models/Item';
import { ManagerService } from '../../services/manager.service';

@Component(
  { selector: 'app-modal',
  templateUrl: './food-edit-modal.component.html',
  styleUrls: ['./food-edit-modal.component.scss']
})
export class FoodEditModalComponent {
  meal: Item;

  constructor(public modalRef: MdbModalRef<FoodEditModalComponent>, private managerService: ManagerService) {}

  saveChanges() {
    if ((<HTMLInputElement>document.getElementById("itemName")).value !== "") {
      this.meal.name = (<HTMLInputElement>document.getElementById("itemName")).value;
    }
    if ((<HTMLInputElement>document.getElementById("ingredients")).value !== "") {
      this.meal.ingredients = (<HTMLInputElement>document.getElementById("ingredients")).value;
    }
    if ((<HTMLInputElement>document.getElementById("description")).value !== "") {
      this.meal.description = (<HTMLInputElement>document.getElementById("description")).value;
    }
    if ((<HTMLInputElement>document.getElementById("preparationTime")).value !== "") {
      this.meal.preparationTime = Number((<HTMLInputElement>document.getElementById("preparationTime")).value);
    }
    if ((<HTMLInputElement>document.getElementById("price")).value !== "") {
      this.meal.price.value = Number((<HTMLInputElement>document.getElementById("price")).value);
    }

    this.managerService.updateMenuItem(this.meal);
  }
}