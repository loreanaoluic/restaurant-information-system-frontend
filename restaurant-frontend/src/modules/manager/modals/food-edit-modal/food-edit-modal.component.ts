import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Item } from 'src/modules/app/models/Item';
import { ManagerService } from '../../services/manager.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component(
  { selector: 'app-modal',
  templateUrl: './food-edit-modal.component.html',
  styleUrls: ['./food-edit-modal.component.scss']
})
export class FoodEditModalComponent {
  meal: Item;

  constructor(public modalRef: MdbModalRef<FoodEditModalComponent>, private managerService: ManagerService,
    private toastrService: ToastrService, private router: Router) {}

  saveChanges() {
    if ((<HTMLInputElement>document.getElementById("itemName")).value === "" || 
    (<HTMLInputElement>document.getElementById("ingredients")).value === "" ||
    (<HTMLInputElement>document.getElementById("description")).value === "" ||
    (<HTMLInputElement>document.getElementById("preparationTime")).value === "" ||
    (<HTMLInputElement>document.getElementById("price")).value === "") {

      this.toastrService.error('All fields must be filled!');

    } else {

      this.meal.name = (<HTMLInputElement>document.getElementById("itemName")).value;
      this.meal.ingredients = (<HTMLInputElement>document.getElementById("ingredients")).value;
      this.meal.description = (<HTMLInputElement>document.getElementById("description")).value;
      this.meal.preparationTime = Number((<HTMLInputElement>document.getElementById("preparationTime")).value);
      this.meal.price.value = Number((<HTMLInputElement>document.getElementById("price")).value);
      this.managerService.updateMenuItem(this.meal);
    }
  }

  deleteItem() {
    this.managerService.deleteMenuItem(this.meal);
    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/manager/menu']);
    });
  }
}