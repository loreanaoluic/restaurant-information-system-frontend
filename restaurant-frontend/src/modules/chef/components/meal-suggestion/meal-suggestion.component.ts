import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/modules/app/services/auth.service';
import { ChefService } from '../../services/chef.service';
import { NewRequest } from 'src/modules/app/models/NewRequest';

@Component({
  selector: 'app-meal-suggestion',
  templateUrl: './meal-suggestion.component.html',
  styleUrls: ['./meal-suggestion.component.scss']
})
export class MealSuggestionComponent implements OnInit {

  constructor ( private authService : AuthService, private mealService : ChefService ) { }

  ngOnInit(): void {}

  saveChanges() {
    let image = "../../../../assets/images/" + (<HTMLInputElement>document.getElementById("image")).value.split(/(\\|\/)/g).pop();
    const request = new NewRequest((<HTMLInputElement>document.getElementById("itemName")).value, 
    (<HTMLInputElement>document.getElementById("ingredients")).value, image, 
    (<HTMLInputElement>document.getElementById("description")).value, 
    Number((<HTMLInputElement>document.getElementById("preparationTime")).value),
    Number((<HTMLInputElement>document.getElementById("price")).value), 
      this.authService.getCurrentUser()?.username!);

    this.mealService.createRequest(request);
  }
}
