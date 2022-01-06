import { Routes } from "@angular/router";
import { ProfileInfoComponent } from "../app/components/profile-info/profile-info.component";
import { RoleGuard } from "../app/guards/role.guard";
import { OrdersPageComponent } from "./pages/orders-page/orders-page.component";



export const CookRoutes: Routes = [
  {
    path: "orders",
    pathMatch: "full",
    component: OrdersPageComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: "Cook|Chef" },
  },
  {
    path: "profile",
    pathMatch: "full",
    component: ProfileInfoComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: "Cook|Chef" },
  }
];
