import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Login } from 'src/modules/app/models/Login';
import { AuthService } from 'src/modules/app/services/auth.service';
import { Router } from "@angular/router";
import { Token } from 'src/modules/app/models/Token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formdata : FormGroup

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.formdata = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit(): void {
    console.log(this.authService.getCurrentUser());
  }

  submit(){
    const auth: Login = {
      username: this.formdata.value.username,
      password: this.formdata.value.password,
    };

    this.authService.login(auth).subscribe({
      next: (result) => {
        localStorage.setItem("userToken", JSON.stringify(result));
        let tokenString = localStorage.getItem("userToken");
        if(tokenString){
          let token : Token = JSON.parse(tokenString);
          this.authService.setCurrentUser(token);
          this.router.navigate(["manager/employees"]);
        }
        
      },
      error: (result) => {
        console.log("MAJMUN");
      }
    });
  }
}
