import { Component, OnInit } from '@angular/core';
import { User } from 'src/modules/app/models/User';
import { ManagerService } from '../../services/manager.service';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.scss']
})
export class EmployeesPageComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}

}
