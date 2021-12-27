import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CookRoutes } from './cook.routes';
import { OrdersComponent } from './components/orders/orders.component';



@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(CookRoutes)
  ]
})
export class CookModule { }
