import { Routes } from "@angular/router";
import { RoleGuard } from "../app/guards/role.guard";
import { EmployeesPageComponent } from "./pages/employees-page/employees-page.component";

export const ManagerRoutes: Routes = [
  {
    path: "employees",
    pathMatch: "full",
    component: EmployeesPageComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: "Manager" },
  },
  
];
