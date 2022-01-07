import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ChefRoutes } from './chef.routes';
import { MealSuggestionPageComponent } from './pages/meal-suggestion-page/meal-suggestion-page.component';



@NgModule({
  declarations: [
    MealSuggestionPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(ChefRoutes)
  ]
})
export class ChefModule { }
