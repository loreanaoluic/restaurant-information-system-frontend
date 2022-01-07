import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewOrderComponent } from './components/new-order/new-order.component';
import { NewOrderPageComponent } from './pages/new-order-page/new-order-page.component';
import { RouterModule } from '@angular/router';
import { WaiterRoutes } from './waiter.routes';
import { HttpClientModule } from '@angular/common/http';
import { NotificationPageComponent } from './pages/notification-page/notification-page.component';
import { NotificationComponent } from './components/notifications/notification.component';

@NgModule({
  declarations: [
    NewOrderComponent,
    NewOrderPageComponent,
    NotificationComponent,
    NotificationPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(WaiterRoutes),
  ]
})
export class WaiterModule { }
