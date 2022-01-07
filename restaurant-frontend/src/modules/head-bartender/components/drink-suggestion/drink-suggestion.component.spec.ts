import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkSuggestionComponent } from './drink-suggestion.component';

describe('DrinkSuggestionComponent', () => {
  let component: DrinkSuggestionComponent;
  let fixture: ComponentFixture<DrinkSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkSuggestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
