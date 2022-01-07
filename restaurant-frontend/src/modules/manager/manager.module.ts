import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ManagerRoutes } from './manager.routes';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';
import { DrinkCardComponent } from './components/drink-card/drink-card.component';
import { DrinkCardPageComponent } from './pages/drink-card-page/drink-card-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { ItemRequestsComponent } from './components/item-requests/item-requests.component';
import { ItemRequestsPageComponent } from './pages/item-requests-page/item-requests-page.component';
import { RequestInfoModalComponent } from './modals/request-info-modal/request-info-modal.component';
import { EmployeeUpdateComponent } from './components/employee-update/employee-update.component';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { FormsModule } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeesPageComponent,
    DrinkCardComponent,
    DrinkCardPageComponent,
    MenuComponent,
    MenuPageComponent,
    ItemRequestsComponent,
    ItemRequestsPageComponent,
    RequestInfoModalComponent,
    EmployeeUpdateComponent,
    EmployeeCreateComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(ManagerRoutes),
    FormsModule,
  ],
  exports: [EmployeeListComponent],
  entryComponents: [RequestInfoModalComponent],
})
export class ManagerModule {}
