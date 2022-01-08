import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  getUserByUsername(username: string): Observable<User> {
    return this.http.get<User>('backend/api/user/' + username, {
      headers: this.headers,
      responseType: 'json',
    });
  }

  update(user: User): void {
    this.http
      .post<User>('backend/api/user/update-user', user, {
        headers: this.headers,
        responseType: 'json',
      })
      .subscribe((response) => {
        this.toastr.success('Update successfull!');
      });
  }

  create(user: User): void {
    this.http
      .post<User>('backend/api/user/new-user', user, {
        headers: this.headers,
        responseType: 'json',
      })
      .subscribe((response) => {
        this.toastr.success('create successfull!');
      });
  }
}
