import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/modules/app/models/User';

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
}
