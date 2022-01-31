import { Component, OnInit } from '@angular/core';
import { RestaurantTable } from 'src/modules/app/models/RestaurantTable';
import { WaiterService } from '../../services/waiter.service';
import { WebSocketService } from 'src/modules/app/services/WebSocketService';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss'],
})
export class NewOrderComponent implements OnInit {
  tables: RestaurantTable[] = [];
  public notifications = 0;

  constructor(
    private waiterService: WaiterService,
    private webSocketService: WebSocketService,
    private toastrService: ToastrService
  ) {
    // Open connection with server socket
    const stompClient = this.webSocketService.connect();
    stompClient.connect({}, () => {
      // Subscribe to notification topic
      stompClient.subscribe(
        '/topic/notification/waiter',
        (notifications: { body: string }) => {
          // Update notifications attribute with the recent messsage sent from the server
          this.notifications = JSON.parse(notifications.body).count;
          this.toastrService.success('New notification arrived');
        }
      );
    });
  }

  ngOnInit(): void {
    this.waiterService.getAllRestaurantTables().subscribe((response) => {
      this.tables = response;
    });
  }

  newOrder(tableId: number) {
    localStorage.setItem('tableId', tableId.toString());
    this.waiterService.newReceipt(tableId).subscribe((response) => {
      localStorage.setItem('receiptId', response.id.toString());
      window.location.href = 'http://localhost:4200/waiter/stepperOrder';
    });
  }
}
