import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkCardPageComponent } from './drink-card-page.component';

describe('DrinkCardPageComponent', () => {
  let component: DrinkCardPageComponent;
  let fixture: ComponentFixture<DrinkCardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkCardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
