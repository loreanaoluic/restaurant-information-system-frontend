import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar-manager',
  templateUrl: './navbar-manager.component.html',
  styleUrls: ['./navbar-manager.component.scss']
})
export class NavbarManagerComponent  {

  constructor(private authService : AuthService, private router: Router) { }


  logout(){
    this.authService.logout();
    this.router.navigate(["login"]);
  }

}
