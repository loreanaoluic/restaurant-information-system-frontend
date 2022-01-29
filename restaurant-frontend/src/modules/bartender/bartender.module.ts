import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BartenderRoutes } from './bartender.routes';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { DrinkOrdersComponent } from './components/drink-orders/drink-orders.component';

@NgModule({
  declarations: [
    DrinkOrdersComponent,
    OrdersPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(BartenderRoutes),
  ]
})
export class BartenderModule { }
