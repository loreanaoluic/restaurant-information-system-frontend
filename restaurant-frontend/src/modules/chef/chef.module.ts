import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ChefRoutes } from './chef.routes';
import { MealSuggestionPageComponent } from './pages/meal-suggestion-page/meal-suggestion-page.component';
import { MealSuggestionComponent } from './components/meal-suggestion/meal-suggestion.component';


@NgModule({
  declarations: [
    MealSuggestionComponent,
    MealSuggestionPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(ChefRoutes)
  ]
})
export class ChefModule { }
