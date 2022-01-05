import { Component, OnInit } from '@angular/core';
import { Item } from 'src/modules/app/models/Item';
import { ManagerService } from '../../services/manager.service';

@Component({
  selector: 'app-drink-card',
  templateUrl: './drink-card.component.html',
  styleUrls: ['./drink-card.component.scss']
})
export class DrinkCardComponent implements OnInit {
  drinks : Item[] = [];

  constructor(private managerService : ManagerService) { }

  ngOnInit(): void {
    this.managerService.getAllDrinkCardItems().subscribe(
      (response) => {
        this.drinks = response;
    });
  }

}
