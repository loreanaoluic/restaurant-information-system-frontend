import { Injectable } from "@angular/core";
import { Router, ActivatedRouteSnapshot, CanActivate } from "@angular/router";
import { AuthService } from "../services/auth.service";


@Injectable({
  providedIn: "root",
})
export class LoginGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {

    if(!this.auth.getCurrentUser()) {
      this.router.navigate(["login"]);
      return false
    }
    
    
    return true;
  }
}
