import { Routes } from "@angular/router";
import { ProfileInfoComponent } from "../app/components/profile-info/profile-info.component";
import { RoleGuard } from "../app/guards/role.guard";
import { EmployeesPageComponent } from "./pages/employees-page/employees-page.component";
import { DrinkCardPageComponent } from "./pages/drink-card-page/drink-card-page.component";
import { MenuPageComponent } from "./pages/menu-page/menu-page.component";
import { ItemRequestsPageComponent } from "./pages/item-requests-page/item-requests-page.component";
import { TablePageComponent } from "./pages/table-page/table-page.component";
import { ReportComponent } from "./components/report/report.component";
import { NewExpenseComponent } from "./components/new-expense/new-expense.component";

export const ManagerRoutes: Routes = [
  {
    path: "employees",
    pathMatch: "full",
    component: EmployeesPageComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: "Manager|Director" },
  },
  {
    path: "profile",
    pathMatch: "full",
    component: ProfileInfoComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: "Manager|Director" }, 
  },
  {
    path: "drinkCard",
    pathMatch: "full",
    component: DrinkCardPageComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: "Manager" },
  },
  {
    path: "menu",
    pathMatch: "full",
    component: MenuPageComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: "Manager" },
  },
  {
    path: "itemRequests",
    pathMatch: "full",
    component: ItemRequestsPageComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: "Manager" },
  },
  {
    path: "table",
    pathMatch: "full",
    component: TablePageComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: "Manager" },
  }
  ,{
    path: "report",
    pathMatch: "full",
    component: ReportComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: "Manager" },
  }
  ,{
    path: "newExpense",
    pathMatch: "full",
    component: NewExpenseComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: "Manager" },
  }
];
