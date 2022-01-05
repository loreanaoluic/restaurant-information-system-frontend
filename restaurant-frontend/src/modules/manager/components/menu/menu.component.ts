import { Component, OnInit } from '@angular/core';
import { Item } from 'src/modules/app/models/Item';
import { ManagerService } from '../../services/manager.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems : Item[] = [];

  constructor(private managerService : ManagerService) { }

  ngOnInit(): void {
    this.managerService.getAllMenuItems().subscribe(
      (response) => {
        this.menuItems = response;
    });
  }

}
