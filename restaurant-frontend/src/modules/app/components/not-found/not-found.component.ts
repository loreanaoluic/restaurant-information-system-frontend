import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(
    private router : Router,
    private authService : AuthService
  ) { }

  ngOnInit(): void {
  }

  redirect(){
    if(this.authService.getCurrentUser()){
      let role = this.authService.getCurrentUser()?.dtype;

      if(role === "Manager") this.router.navigate(["manager/employees"]);
      if(role === "Waiter") this.router.navigate(["waiter/newOrder"]);
      if(role === "Cook" || role === "Chef") this.router.navigate(["cook/orders"]);
      if(role === "Bartender" || role === "HeadBartender") this.router.navigate(["bartender/orders"]);
      if(role === "Director") this.router.navigate(["director/employees"]);


    }else this.router.navigate(["login"]);
  }
}
