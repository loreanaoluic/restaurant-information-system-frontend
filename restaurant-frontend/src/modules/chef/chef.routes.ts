import { Routes } from "@angular/router";
import { ProfileInfoComponent } from "../app/components/profile-info/profile-info.component";
import { RoleGuard } from "../app/guards/role.guard";
import { MealSuggestionPageComponent } from "./pages/meal-suggestion-page/meal-suggestion-page.component";



export const ChefRoutes: Routes = [
  {
    path: "mealSuggestion",
    pathMatch: "full",
    component: MealSuggestionPageComponent,
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
