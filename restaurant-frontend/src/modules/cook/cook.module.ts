import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CookRoutes } from './cook.routes';
import { FoodOrdersComponent } from './components/food-orders/food-orders.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';


@NgModule({
  declarations: [
    FoodOrdersComponent,
    OrdersPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(CookRoutes)
  ]
})
export class CookModule { }
