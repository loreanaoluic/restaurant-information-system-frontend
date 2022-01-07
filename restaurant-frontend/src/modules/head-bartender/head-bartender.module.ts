import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HeadBartenderRoutes } from './head-bartender.routes';
import { DrinkSuggestionPageComponent } from './pages/drink-suggestion-page/drink-suggestion-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DrinkSuggestionComponent } from './components/drink-suggestion/drink-suggestion.component';

@NgModule({
  declarations: [
    DrinkSuggestionComponent,
    DrinkSuggestionPageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(HeadBartenderRoutes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HeadBartenderModule { }
