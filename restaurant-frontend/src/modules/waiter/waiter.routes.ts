import { Routes } from "@angular/router";
import { RoleGuard } from "../app/guards/role.guard";
import { NewOrderPageComponent } from "./pages/new-order-page/new-order-page.component";
import { NotificationPageComponent } from "./pages/notification-page/notification-page.component";
import { StepperOrderPageComponent } from "./pages/stepper-order-page/stepper-order-page.component";

export const WaiterRoutes: Routes = [
  {
    path: "newOrder",
    pathMatch: "full",
    component: NewOrderPageComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: "Waiter" },
  },
  {
    path: "notification",
    pathMatch: "full",
    component: NotificationPageComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: "Waiter" },
  },
  {
    path: "stepperOrder",
    pathMatch: "full",
    component: StepperOrderPageComponent,
    canActivate: [RoleGuard],
    data: { expectedRoles: "Waiter" },
  },
];
