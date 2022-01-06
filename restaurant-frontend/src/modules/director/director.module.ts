import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DirectorRoutes } from './director.routes';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';


@NgModule({
  declarations: [
    EmployeesPageComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(DirectorRoutes),
  ]
})
export class DirectorModule { }
