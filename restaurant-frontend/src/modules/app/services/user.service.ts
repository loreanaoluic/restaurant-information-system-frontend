import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private headers = new HttpHeaders({ "Content-Type": "application/json"});

  constructor(
    private http: HttpClient, 
    private toastr: ToastrService,
    ) { }

  update(user: User): void{
    this.http.post<User>("backend/api/user/update-user", user, {
      headers: this.headers,
      responseType: "json",
    }).subscribe(response => {
      this.toastr.success("Update successful!");
      localStorage.setItem("currentUser", JSON.stringify(user));
    });
  }
}
