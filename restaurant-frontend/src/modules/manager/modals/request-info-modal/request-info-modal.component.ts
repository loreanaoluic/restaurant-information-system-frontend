import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Request } from 'src/modules/app/models/Request';

@Component(
  { selector: 'app-modal',
  templateUrl: './request-info-modal.component.html',
})
export class RequestInfoModalComponent {
  request: Request;

  constructor(public modalRef: MdbModalRef<RequestInfoModalComponent>) {}
}