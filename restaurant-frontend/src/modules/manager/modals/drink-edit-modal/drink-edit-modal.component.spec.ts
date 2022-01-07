import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrinkEditModalComponent } from './drink-edit-modal.component';

describe('DrinkEditModalComponent', () => {
  let component:DrinkEditModalComponent;
  let fixture: ComponentFixture<DrinkEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkEditModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
