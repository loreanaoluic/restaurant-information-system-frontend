import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/modules/app/services/auth.service';
import { HeadBartenderService } from '../../services/head-bartender.service';
import { NewRequest } from 'src/modules/app/models/NewRequest';

@Component({
  selector: 'app-drink-suggestion',
  templateUrl: './drink-suggestion.component.html',
  styleUrls: ['./drink-suggestion.component.scss']
})
export class DrinkSuggestionComponent implements OnInit {

  constructor ( private authService : AuthService, private headBartenderService : HeadBartenderService ) { }

  ngOnInit(): void {}

  saveChanges() {
    let image = "../../../../assets/images/" + (<HTMLInputElement>document.getElementById("image")).value.split(/(\\|\/)/g).pop();
    const request = new NewRequest((<HTMLInputElement>document.getElementById("itemName")).value, 
    (<HTMLInputElement>document.getElementById("ingredients")).value, image, 
    (<HTMLInputElement>document.getElementById("description")).value, 
    Number((<HTMLInputElement>document.getElementById("preparationTime")).value),
    Number((<HTMLInputElement>document.getElementById("price")).value), 
      this.authService.getCurrentUser()?.username!);

    this.headBartenderService.createRequest(request);
  }
}
