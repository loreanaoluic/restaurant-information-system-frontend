import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar-bartender',
  templateUrl: './navbar-bartender.component.html',
  styleUrls: ['./navbar-bartender.component.scss']
})
export class NavbarBartenderComponent implements OnInit {
  currentRole : any = "";

  constructor(private authService : AuthService, private router: Router) { }

  ngOnInit(): void {
    this.currentRole = this.authService.getCurrentUser()?.dtype;
  }

  logout(){
    this.authService.logout();
    this.router.navigate(["login"]);
  }

}
