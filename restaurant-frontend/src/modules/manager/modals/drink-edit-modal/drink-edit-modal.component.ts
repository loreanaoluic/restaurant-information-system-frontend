import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Item } from 'src/modules/app/models/Item';
import { ManagerService } from '../../services/manager.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component(
  { selector: 'app-modal',
  templateUrl: './drink-edit-modal.component.html',
  styleUrls: ['./drink-edit-modal.component.scss']
})
export class DrinkEditModalComponent {
  drink: Item;

  constructor(public modalRef: MdbModalRef<DrinkEditModalComponent>, private managerService: ManagerService,
    private toastrService: ToastrService, private router: Router) {}

  saveChanges() {
    if ((<HTMLInputElement>document.getElementById("itemName")).value === "" || 
    (<HTMLInputElement>document.getElementById("ingredients")).value === "" ||
    (<HTMLInputElement>document.getElementById("description")).value === "" ||
    (<HTMLInputElement>document.getElementById("price")).value === "") {

      this.toastrService.error('All fields must be filled!');

    } else {
      
      this.drink.name = (<HTMLInputElement>document.getElementById("itemName")).value;
      this.drink.ingredients = (<HTMLInputElement>document.getElementById("ingredients")).value;
      this.drink.description = (<HTMLInputElement>document.getElementById("description")).value;
      this.drink.price.value = Number((<HTMLInputElement>document.getElementById("price")).value);
      this.managerService.updateDrinkCardItem(this.drink);
    }
  }

  deleteItem() {
    this.managerService.deleteDrinkCardItem(this.drink);
    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/manager/drinkCard']);
    });
  }
}