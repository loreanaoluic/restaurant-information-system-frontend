import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteTableModalComponent } from './delete-table-modal.component';

describe('DeleteTableModalComponent', () => {
  let component:DeleteTableModalComponent;
  let fixture: ComponentFixture<DeleteTableModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTableModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTableModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
