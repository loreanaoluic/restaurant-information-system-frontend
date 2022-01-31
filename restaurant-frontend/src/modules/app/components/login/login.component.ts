import { Component } from '@angular/core';
import { Login } from 'src/modules/app/models/Login';
import { AuthService } from 'src/modules/app/services/auth.service';
import { Router } from '@angular/router';
import { Token } from 'src/modules/app/models/Token';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService
  ) { }

  submit() {
    const auth: Login = {
      username: (<HTMLInputElement>document.getElementById("username")).value,
      password: (<HTMLInputElement>document.getElementById("password")).value,
    };

    this.authService.login(auth).subscribe({
      next: (result) => {
        localStorage.setItem('userToken', JSON.stringify(result));
        const tokenString = localStorage.getItem('userToken');
        if (tokenString) {
          const token: Token = JSON.parse(tokenString);
          this.authService.setCurrentUser(token);

          const role = this.authService.getCurrentUser()?.dtype!;

          if(role === "Manager") this.router.navigate(["manager/employees"]);
          if(role === "Waiter") this.router.navigate(["waiter/newOrder"]);
          if(role === "Cook") this.router.navigate(["cook/orders"]);
          if(role === "Chef") this.router.navigate(["chef/mealSuggestion"]);
          if(role === "Bartender") this.router.navigate(["bartender/orders"]);
          if(role === "HeadBartender") this.router.navigate(["head-bartender/drinkSuggestion"])
          if(role === "Director") this.router.navigate(["director/employees"]);
        }
      },
      error: (error) => {
        if (error.status === 400) this.toastrService.error('Bad credentials!');
      },
    });
  }
}
