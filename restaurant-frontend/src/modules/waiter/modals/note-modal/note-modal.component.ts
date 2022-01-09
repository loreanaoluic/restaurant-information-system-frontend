import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ReceiptItem } from 'src/modules/app/models/ReceiptItem';
import { WaiterService } from '../../services/waiter.service';

@Component(
  { selector: 'app-modal',
  templateUrl: './note-modal.component.html',
  styleUrls: ['./note-modal.component.scss']
})
export class NoteModalComponent {
  receiptItem: ReceiptItem;

  constructor(public modalRef: MdbModalRef<NoteModalComponent>, private waiterService: WaiterService) {}

  update() {
    if ((<HTMLInputElement>document.getElementById("note")).value !== "") {
      this.receiptItem.additionalNote = (<HTMLInputElement>document.getElementById("note")).value;
    }

    this.waiterService.updateReceiptItem(this.receiptItem);
  }
}