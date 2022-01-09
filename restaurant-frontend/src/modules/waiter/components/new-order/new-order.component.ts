import { Component, OnInit } from '@angular/core';
import { ReceiptItem } from 'src/modules/app/models/ReceiptItem';
import { RestaurantTable } from 'src/modules/app/models/RestaurantTable';
import { WaiterService } from '../../services/waiter.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {
  tables: RestaurantTable[] = [];

  constructor(private waiterService : WaiterService) { }

  ngOnInit(): void {
    this.waiterService.getAllRestaurantTables().subscribe(
      (response) => {
        this.tables = response;
    });
  }

  newOrder(tableId: number) {
    localStorage.setItem("tableId", tableId.toString());
    this.waiterService.newReceipt(tableId).subscribe(
      (response) => {
        localStorage.setItem("receiptId", response.id.toString());
        window.location.href = 'http://localhost:4200/waiter/stepperOrder';
      });
  }

}
