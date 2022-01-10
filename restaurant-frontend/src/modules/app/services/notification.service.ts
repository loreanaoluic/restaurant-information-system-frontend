import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  getNotificationCook(): void {
    this.http
      .get('backend/api/notifyCook', {
        headers: this.headers,
        responseType: 'json',
      })
      .subscribe((response) => {
        this.toastr.success('Notify successfull!');
      });
  }

  getNotificationWaiter(): void {
    this.http
      .get('backend/api/notifyWaiter', {
        headers: this.headers,
        responseType: 'json',
      })
      .subscribe((response) => {
        this.toastr.success('Notify successfull!');
      });
  }

  getNotificationBartender(): void {
    this.http
      .get('backend/api/notifyBartender', {
        headers: this.headers,
        responseType: 'json',
      })
      .subscribe((response) => {
        this.toastr.success('Notify successfull!');
      });
  }
}
