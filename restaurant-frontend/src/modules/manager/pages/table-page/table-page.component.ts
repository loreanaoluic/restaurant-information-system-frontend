import { Component, OnInit } from '@angular/core';
import { User } from 'src/modules/app/models/User';
import { ManagerService } from '../../services/manager.service';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}

}
