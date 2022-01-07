import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Login } from 'src/modules/app/models/Login';
import { AuthService } from 'src/modules/app/services/auth.service';
import { Router } from '@angular/router';
import { Token } from 'src/modules/app/models/Token';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formdata: FormGroup;
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService
  ) {
    this.formdata = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit(): void {
    console.log(this.authService.getCurrentUser());
  }

  submit() {
    const auth: Login = {
      username: this.formdata.value.username,
      password: this.formdata.value.password,
    };

    this.authService.login(auth).subscribe({
      next: (result) => {
        localStorage.setItem('userToken', JSON.stringify(result));
        let tokenString = localStorage.getItem('userToken');
        if (tokenString) {
          let token: Token = JSON.parse(tokenString);
          this.authService.setCurrentUser(token);

          let role = this.authService.getCurrentUser()?.dtype!;

          if(role === "Manager") this.router.navigate(["manager/employees"]);
          if(role === "Waiter") this.router.navigate(["waiter/newOrder"]);
          if(role === "Cook" || role === "Chef") this.router.navigate(["cook/orders"]);
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
