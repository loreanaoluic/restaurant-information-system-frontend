import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../services/manager.service';
import { NewExpense } from 'src/modules/app/models/NewExpense';

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component.scss']
})
export class NewExpenseComponent {

  constructor(private managerService : ManagerService) { }

  saveChanges() {
    const expense = new NewExpense((<HTMLInputElement>document.getElementById("expenseName")).value, 
    Number((<HTMLInputElement>document.getElementById("value")).value));

    this.managerService.createExpense(expense);
  }

}
