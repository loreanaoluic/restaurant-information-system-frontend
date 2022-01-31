import { Component, OnInit } from '@angular/core';
import { ReceiptItem } from 'src/modules/app/models/ReceiptItem';
import { CookService } from '../../services/cook.service';
import { WebSocketService } from 'src/modules/app/services/WebSocketService';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from '../../../app/services/notification.service';

@Component({
  selector: 'app-food-orders',
  templateUrl: './food-orders.component.html',
  styleUrls: ['./food-orders.component.scss'],
})
export class FoodOrdersComponent implements OnInit {
  orders: ReceiptItem[] = [];
  public notifications = 0;

  constructor(
    private webSocketService: WebSocketService,
    private toastrService: ToastrService,
    private cookService: CookService,
    private notificationService: NotificationService
  ) {
    // Open connection with server socket
    const stompClient = this.webSocketService.connect();
    stompClient.connect({}, () => {
      // Subscribe to notification topic
      stompClient.subscribe(
        '/topic/notification/cook',
        (notifications: { body: string }) => {
          // Update notifications attribute with the recent messsage sent from the server
          this.notifications = JSON.parse(notifications.body).count;
          this.toastrService.success('New order arrived');
        }
      );
    });
  }

  ngOnInit(): void {
    this.cookService.getAllOrders().subscribe((response) => {
      this.orders = response;
    });
  }

  orderDone(id: number) {
    this.cookService.orderDone(id);
    this.notificationService.getNotificationWaiter();
  }
}
