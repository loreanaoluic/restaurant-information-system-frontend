import { Component, OnInit } from '@angular/core';
import { ReceiptItem } from 'src/modules/app/models/ReceiptItem';
import { BartenderService } from '../../services/bartender.service';
import { WebSocketService } from 'src/modules/app/services/WebSocketService';
import { ToastrService } from 'ngx-toastr';
import { NotificationService } from '../../../app/services/notification.service';

@Component({
  selector: 'app-drink-orders',
  templateUrl: './drink-orders.component.html',
  styleUrls: ['./drink-orders.component.scss'],
})
export class DrinkOrdersComponent implements OnInit {
  orders: ReceiptItem[] = [];
  public notifications = 0;

  constructor(
    private webSocketService: WebSocketService,
    private toastrService: ToastrService,
    private bartenderService: BartenderService,
    private notificationService: NotificationService
  ) {
    // Open connection with server socket
    let stompClient = this.webSocketService.connect();
    stompClient.connect({}, () => {
      // Subscribe to notification topic
      stompClient.subscribe(
        '/topic/notification/bartender',
        (notifications: { body: string }) => {
          // Update notifications attribute with the recent messsage sent from the server
          this.notifications = JSON.parse(notifications.body).count;
          this.toastrService.success('New order arrived');
        }
      );
    });
  }

  ngOnInit(): void {
    this.bartenderService.getAllOrders().subscribe((response) => {
      this.orders = response;
    });
  }

  orderDone(id: number) {
    this.bartenderService.orderDone(id);
    this.notificationService.getNotificationWaiter();
  }
}
