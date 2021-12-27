import { Routes } from "@angular/router";
import { RoleGuard } from "../app/guards/role.guard";
import { EmployeesPageComponent } from "../director/pages/employees-page/employees-page.component";



export const DirectorRoutes: Routes = [
  {
    path: "employees",
    pathMatch: "full",
    component: EmployeesPageComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: "Director" },
  },
  
];
