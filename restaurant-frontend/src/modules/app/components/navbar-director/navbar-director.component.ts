import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar-director',
  templateUrl: './navbar-director.component.html',
  styleUrls: ['./navbar-director.component.scss']
})
export class NavbarDirectorComponent implements OnInit {
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
