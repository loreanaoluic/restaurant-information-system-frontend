import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ReceiptItem } from 'src/modules/app/models/ReceiptItem';
import { RestaurantTable } from 'src/modules/app/models/RestaurantTable';
import { Receipt } from 'src/modules/app/models/Receipt';

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

  getAllRestaurantTables(): Observable<RestaurantTable[]>{
    return this.http.get<RestaurantTable[]>("backend/api/manager/restaurant-tables", {
      headers: this.headers,
      responseType: "json",
    });
  }

  newReceipt(id: number): Observable<Receipt>{
    return this.http.post<Receipt>("backend/api/waiter/order/" + id, {
      headers: this.headers,
      responseType: "json",      
    });
  }

  getAllReceiptItems(): Observable<ReceiptItem[]>{
    const receiptId = localStorage.getItem("receiptId");
    return this.http.get<ReceiptItem[]>("backend/api/waiter/receipt-items/" + receiptId, {
      headers: this.headers,
      responseType: "json",
    });
  }

  updateReceiptItem(receiptItem: ReceiptItem): void{
    this.http.post<ReceiptItem>("backend/api/waiter/update-receipt-item", receiptItem, {
      headers: this.headers,
      responseType: "json",      
    }).subscribe(response => {
      this.toastr.success("Note updated");
    });
  }

  deleteReceiptItem(id: number): void{
    this.http.post("backend/api/waiter/delete-receipt-item/" + id, {
      headers: this.headers,
      responseType: "json",      
    }).subscribe(response => {
      this.toastr.success("Item deleted");
    });
  }
}
