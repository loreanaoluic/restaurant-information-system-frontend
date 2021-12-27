import { Routes } from "@angular/router";
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
  
];
