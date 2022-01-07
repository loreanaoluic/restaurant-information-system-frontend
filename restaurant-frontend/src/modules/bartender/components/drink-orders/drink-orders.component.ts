import { Component, OnInit } from '@angular/core';
import { ReceiptItem } from 'src/modules/app/models/ReceiptItem';
import { BartenderService } from '../../services/bartender.service';

@Component({
  selector: 'app-drink-orders',
  templateUrl: './drink-orders.component.html',
  styleUrls: ['./drink-orders.component.scss']
})
export class DrinkOrdersComponent implements OnInit {
  orders : ReceiptItem[] = [];

  constructor(private bartenderService : BartenderService) { }

  ngOnInit(): void {
    this.bartenderService.getAllOrders().subscribe(
      (response) => {
        this.orders = response;
    });
  }

  orderDone(id: number) {
    this.bartenderService.orderDone(id);
  }
}
