import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewOrderComponent } from './components/new-order/new-order.component';
import { NewOrderPageComponent } from './pages/new-order-page/new-order-page.component';
import { RouterModule } from '@angular/router';
import { WaiterRoutes } from './waiter.routes';
import { HttpClientModule } from '@angular/common/http';
import { NotificationPageComponent } from './pages/notification-page/notification-page.component';
import { NotificationComponent } from './components/notifications/notification.component';
import { StepperOrderComponent } from './components/stepper-order/stepper-order.component';
import { StepperOrderPageComponent } from './pages/stepper-order-page/stepper-order-page.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ManagerModule } from '../manager/manager.module';
import { NoteModalComponent } from './modals/note-modal/note-modal.component';

@NgModule({
  declarations: [
    NewOrderComponent,
    NewOrderPageComponent,
    NotificationComponent,
    NotificationPageComponent,
    StepperOrderComponent,
    StepperOrderPageComponent,
    NoteModalComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(WaiterRoutes),
    MatStepperModule,
    MatIconModule,
    ManagerModule,
  ],
  entryComponents: [NoteModalComponent],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class WaiterModule {}
