import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar-waiter',
  templateUrl: './navbar-waiter.component.html',
  styleUrls: ['./navbar-waiter.component.scss']
})
export class NavbarWaiterComponent implements OnInit {

  constructor(private authService : AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
    this.router.navigate(["login"]);
  }

}
