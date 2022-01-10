import { Component, OnInit, ViewChild } from '@angular/core';
import { WaiterService } from '../../services/waiter.service';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ReceiptItem } from 'src/modules/app/models/ReceiptItem';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { NoteModalComponent } from '../../modals/note-modal/note-modal.component';
import { MatStepper } from '@angular/material/stepper';
import { NotificationService } from '../../../app/services/notification.service';

@Component({
  selector: 'app-stepper-order',
  templateUrl: './stepper-order.component.html',
  styleUrls: ['./stepper-order.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
    MdbModalService,
  ],
})
export class StepperOrderComponent {
  receiptItems: ReceiptItem[] = [];
  totalPrice: number = 0;
  modalRef: MdbModalRef<NoteModalComponent>;
  @ViewChild('stepper') stepper: MatStepper;

  constructor(
    private waiterService: WaiterService,
    private modalService: MdbModalService,
    private notificationService: NotificationService
  ) {}

  getReceiptItems() {
    this.waiterService.getAllReceiptItems().subscribe((response) => {
      this.receiptItems = response;
      this.totalPrice = 0;
      for (let i = 0; i < this.receiptItems.length; i++) {
        this.totalPrice +=
          this.receiptItems[i].item.price.value * this.receiptItems[i].quantity;
      }
    });
  }

  openModal(receiptItem: ReceiptItem) {
    this.modalRef = this.modalService.open(NoteModalComponent, {
      data: { receiptItem: receiptItem },
    });
  }

  deleteReceiptItem(id: number) {
    this.waiterService.deleteReceiptItem(id);
    this.getReceiptItems();
    window.location.reload();
    this.stepper.selectedIndex = 2;
  }

  done() {
    window.location.href = 'http://localhost:4200/waiter/newOrder';
    this.notificationService.getNotificationCook();
    this.notificationService.getNotificationBartender();
  }
}
