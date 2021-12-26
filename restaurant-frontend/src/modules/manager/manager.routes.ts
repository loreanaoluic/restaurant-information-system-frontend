import { Routes } from "@angular/router";
import { EmployeesPageComponent } from "./pages/employees-page/employees-page.component";

export const ManagerRoutes: Routes = [
  {
    path: "employees",
    pathMatch: "full",
    component: EmployeesPageComponent,
    //canActivate: [RoleGuard],
    //data: { expectedRoles: "ADMIN|WINE_USER" },
  },
  
];
