import { Component, OnInit } from '@angular/core';
import { ReceiptItem } from 'src/modules/app/models/ReceiptItem';
import { WaiterService } from '../../services/waiter.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  orders : ReceiptItem[] = [];

  constructor(private waiterService : WaiterService) { }

  ngOnInit(): void {
    this.waiterService.getAllOrders().subscribe(
      (response) => {
        this.orders = response;
    });
  }

  orderDone(id: number) {
    this.waiterService.orderDone(id);
  }
}
