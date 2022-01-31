import { Component } from '@angular/core';
import { AuthService } from 'src/modules/app/services/auth.service';
import { ChefService } from '../../services/chef.service';
import { NewRequest } from 'src/modules/app/models/NewRequest';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-meal-suggestion',
  templateUrl: './meal-suggestion.component.html',
  styleUrls: ['./meal-suggestion.component.scss']
})
export class MealSuggestionComponent{

  constructor ( private authService : AuthService, private mealService : ChefService,
    private toastrService: ToastrService ) { }
  saveChanges() {
    if ((<HTMLInputElement>document.getElementById("image")).value == "" || 
    (<HTMLInputElement>document.getElementById("itemName")).value == "" ||
    (<HTMLInputElement>document.getElementById("ingredients")).value == "" || 
    (<HTMLInputElement>document.getElementById("description")).value == "" ||
    (<HTMLInputElement>document.getElementById("preparationTime")).value == "" ||
    (<HTMLInputElement>document.getElementById("price")).value == "") {

      this.toastrService.error('All fields must be filled!');

    } else {

      const image = "../../../../assets/images/" + (<HTMLInputElement>document.getElementById("image")).value.split(/(\\|\/)/g).pop();
      const request = new NewRequest((<HTMLInputElement>document.getElementById("itemName")).value, 
      (<HTMLInputElement>document.getElementById("ingredients")).value, image, 
      (<HTMLInputElement>document.getElementById("description")).value, 
      Number((<HTMLInputElement>document.getElementById("preparationTime")).value),
      Number((<HTMLInputElement>document.getElementById("price")).value), 
        this.authService.getCurrentUser()?.username!);

        this.mealService.createRequest(request);
    }
  }
}
