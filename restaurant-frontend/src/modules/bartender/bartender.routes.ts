import { Routes } from "@angular/router";
import { ProfileInfoComponent } from "../app/components/profile-info/profile-info.component";
import { RoleGuard } from "../app/guards/role.guard";
import { OrdersPageComponent } from "../bartender/pages/orders-page/orders-page.component";

export const BartenderRoutes: Routes = [
  {
    path: "orders",
    pathMatch: "full",
    component: OrdersPageComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: "Bartender|HeadBartender" },
  },
  {
    path: "profile",
    pathMatch: "full",
    component: ProfileInfoComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: "Bartender|HeadBartender" },
  }
];
