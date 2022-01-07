import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ReceiptItem } from 'src/modules/app/models/ReceiptItem';

@Injectable({
  providedIn: 'root'
})
export class WaiterService {
  private headers = new HttpHeaders({ "Content-Type": "application/json"});

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  getAllOrders(): Observable<ReceiptItem[]>{
    return this.http.get<ReceiptItem[]>("backend/api/waiter/orders", {
      headers: this.headers,
      responseType: "json",
    });
  }

  orderDone(id: number): void{
    this.http.post<ReceiptItem>("backend/api/waiter/" + id + "/change-status", {
      headers: this.headers,
      responseType: "json",
    }).subscribe(response => {
      this.toastr.success(id + " order done!");
      window.location.reload();
    });
  }
}
