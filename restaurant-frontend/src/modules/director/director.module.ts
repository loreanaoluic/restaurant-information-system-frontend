import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DirectorRoutes } from './director.routes';
import { ManagerModule } from '../manager/manager.module';


@NgModule({
  declarations: [
    EmployeesPageComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,    
    RouterModule.forChild(DirectorRoutes),
    ManagerModule,
    
  ],
})
export class DirectorModule { }
