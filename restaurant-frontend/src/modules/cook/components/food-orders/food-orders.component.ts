import { Component, OnInit } from '@angular/core';
import { ReceiptItem } from 'src/modules/app/models/ReceiptItem';
import { CookService } from '../../services/cook.service';

@Component({
  selector: 'app-food-orders',
  templateUrl: './food-orders.component.html',
  styleUrls: ['./food-orders.component.scss']
})
export class FoodOrdersComponent implements OnInit {
  orders : ReceiptItem[] = [];

  constructor(private cookService : CookService) { }

  ngOnInit(): void {
    this.cookService.getAllOrders().subscribe(
      (response) => {
        this.orders = response;
    });
  }

  orderDone(id: number) {
    this.cookService.orderDone(id);
  }
}
