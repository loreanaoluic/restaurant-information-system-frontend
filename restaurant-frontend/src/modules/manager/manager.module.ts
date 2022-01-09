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
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { FormsModule } from '@angular/forms';
import { DrinkEditModalComponent } from './modals/drink-edit-modal/drink-edit-modal.component';
import { FoodEditModalComponent } from './modals/food-edit-modal/food-edit-modal.component';
import { UserEditModalComponent } from './modals/user-edit-modal/user-edit-modal.component';
import { NewUserModalComponent } from './modals/new-user-modal/new-user-modal.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TableComponent } from './components/table/table.component';
import { TablePageComponent } from './pages/table-page/table-page.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AddTableModalComponent } from './modals/add-table-modal/add-table-modal.component';
import { DeleteTableModalComponent } from './modals/delete-table-modal/delete-table-modal.component';

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
    DrinkEditModalComponent,
    FoodEditModalComponent,
    EmployeeCreateComponent,
    UserEditModalComponent,
    AddTableModalComponent,
    DeleteTableModalComponent,
    TableComponent,
    TablePageComponent,
    NewUserModalComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    DragDropModule,
    RouterModule.forChild(ManagerRoutes),
    FormsModule,
  ],
  exports: [EmployeeListComponent],
  entryComponents: [
    RequestInfoModalComponent,
    DrinkEditModalComponent,
    FoodEditModalComponent,
    AddTableModalComponent,
    DeleteTableModalComponent,
    UserEditModalComponent,
  ],
})
export class ManagerModule {}
