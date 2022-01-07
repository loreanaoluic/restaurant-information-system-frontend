import { Routes } from "@angular/router";
import { ProfileInfoComponent } from "../app/components/profile-info/profile-info.component";
import { RoleGuard } from "../app/guards/role.guard";
import { DrinkSuggestionPageComponent } from "./pages/drink-suggestion-page/drink-suggestion-page.component";

export const HeadBartenderRoutes: Routes = [
  {
    path: "drinkSuggestion",
    pathMatch: "full",
    component: DrinkSuggestionPageComponent,
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
