import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkSuggestionPageComponent } from './drink-suggestion-page.component';

describe('DrinkSuggestionPageComponent', () => {
  let component: DrinkSuggestionPageComponent;
  let fixture: ComponentFixture<DrinkSuggestionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkSuggestionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkSuggestionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
