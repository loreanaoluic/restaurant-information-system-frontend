import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealSuggestionPageComponent } from './meal-suggestion-page.component';

describe('MealSuggestionPageComponent', () => {
  let component: MealSuggestionPageComponent;
  let fixture: ComponentFixture<MealSuggestionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealSuggestionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealSuggestionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
