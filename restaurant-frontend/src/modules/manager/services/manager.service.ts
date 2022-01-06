import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/modules/app/models/User';
import { Item } from 'src/modules/app/models/Item';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  private headers = new HttpHeaders({ "Content-Type": "application/json"});

  constructor(private http: HttpClient) { }

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
}
