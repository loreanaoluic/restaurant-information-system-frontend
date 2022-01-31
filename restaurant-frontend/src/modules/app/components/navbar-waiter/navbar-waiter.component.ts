import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar-waiter',
  templateUrl: './navbar-waiter.component.html',
  styleUrls: ['./navbar-waiter.component.scss']
})
export class NavbarWaiterComponent  {

  constructor(private authService : AuthService, private router: Router) { }

  logout(){
    this.authService.logout();
    this.router.navigate(["login"]);
  }

}
