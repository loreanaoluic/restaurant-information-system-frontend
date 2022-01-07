import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/modules/app/models/User';
import { Item } from 'src/modules/app/models/Item';
import { Request } from 'src/modules/app/models/Request';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  private headers = new HttpHeaders({ "Content-Type": "application/json"});

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>("backend/api/manager/getAll", {
      headers: this.headers,
      responseType: "json",
    });
  }

  getAllDrinkCardItems(): Observable<Item[]>{
    return this.http.get<Item[]>("backend/api/waiter/all-drink-card-items", {
      headers: this.headers,
      responseType: "json",
    });
  }

  getAllMenuItems(): Observable<Item[]>{
    return this.http.get<Item[]>("backend/api/waiter/all-menu-items", {
      headers: this.headers,
      responseType: "json",
    });
  }

  getAllRequests(): Observable<Request[]>{
    return this.http.get<Request[]>("backend/api/manager/requests", {
      headers: this.headers,
      responseType: "json",
    });
  }

  acceptRequest(requestId: number): void{
    this.http.post<Request>("backend/api/manager/request-approved/" + requestId, {
      headers: this.headers,
      responseType: "json",
    }).subscribe(response => {
      this.toastr.success("Request accepted!");
    });
  }

  declineRequest(requestId: number): void{
    this.http.post("backend/api/manager/request-declined/" + requestId, {
      headers: this.headers,
      responseType: "json",
    }).subscribe(response => {
      this.toastr.success("Request declined!");
    });
  }

  updateDrinkCardItem(item: Item): void{
    this.http.post<Item>("backend/api/manager/update-drink-card-item", item, {
      headers: this.headers,
      responseType: "json",
    }).subscribe(response => {
      this.toastr.success("Drink updated!");
    });
  }

  updateMenuItem(item: Item): void{
    this.http.post<Item>("backend/api/manager/update-menu-item", item, {
      headers: this.headers,
      responseType: "json",
    }).subscribe(response => {
      this.toastr.success("Meal updated!");
    });
  }
}
