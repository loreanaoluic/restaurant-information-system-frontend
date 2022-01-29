import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkOrdersComponent } from './drink-orders.component';

describe('DrinkOrdersComponent', () => {
  let component: DrinkOrdersComponent;
  let fixture: ComponentFixture<DrinkOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
