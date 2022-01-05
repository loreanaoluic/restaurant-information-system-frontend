import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ManagerRoutes } from './manager.routes';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';
import { DrinkCardComponent } from './components/drink-card/drink-card.component';
import { DrinkCardPageComponent } from './pages/drink-card-page/drink-card-page.component';


@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeesPageComponent,
    DrinkCardComponent,
    DrinkCardPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(ManagerRoutes),
  ]
})
export class ManagerModule { }
