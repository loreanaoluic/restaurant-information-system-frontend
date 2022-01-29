import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExpensePageComponent } from './new-expense-page.component';

describe('NewExpensePageComponent', () => {
  let component: NewExpensePageComponent;
  let fixture: ComponentFixture<NewExpensePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewExpensePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewExpensePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
