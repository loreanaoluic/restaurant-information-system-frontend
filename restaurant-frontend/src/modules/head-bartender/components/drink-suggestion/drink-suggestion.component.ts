import { Component } from '@angular/core';
import { AuthService } from 'src/modules/app/services/auth.service';
import { HeadBartenderService } from '../../services/head-bartender.service';
import { NewRequest } from 'src/modules/app/models/NewRequest';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-drink-suggestion',
  templateUrl: './drink-suggestion.component.html',
  styleUrls: ['./drink-suggestion.component.scss']
})
export class DrinkSuggestionComponent{

  constructor ( private authService : AuthService, private headBartenderService : HeadBartenderService,
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
      (<HTMLInputElement>document.getElementById("description")).value, 0,
      Number((<HTMLInputElement>document.getElementById("price")).value), 
        this.authService.getCurrentUser()?.username!);

      this.headBartenderService.createRequest(request);
    }
  }
}
