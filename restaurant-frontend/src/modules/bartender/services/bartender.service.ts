import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ReceiptItem } from 'src/modules/app/models/ReceiptItem';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BartenderService {
  private headers = new HttpHeaders({ "Content-Type": "application/json"});

  constructor(private http: HttpClient, private toastr: ToastrService,
    private router: Router) { }

  getAllOrders(): Observable<ReceiptItem[]>{
    return this.http.get<ReceiptItem[]>("backend/api/bartender/orders", {
      headers: this.headers,
      responseType: "json",
    });
  }

  orderDone(id: number): void{
    this.http.post<ReceiptItem>("backend/api/bartender/" + id + "/change-status", {
      headers: this.headers,
      responseType: "json",
    }).subscribe(() => {
      this.toastr.success(id + " order done!");
      this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/bartender/orders']);
      });
    });
  }
}
