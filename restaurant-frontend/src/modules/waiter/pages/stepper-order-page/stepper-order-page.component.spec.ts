import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperOrderPageComponent } from './stepper-order-page.component';

describe('StepperOrderPageComponent', () => {
  let component: StepperOrderPageComponent;
  let fixture: ComponentFixture<StepperOrderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperOrderPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
