import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemRequestsPageComponent } from './item-requests-page.component';

describe('EmployeesPageComponent', () => {
  let component: ItemRequestsPageComponent;
  let fixture: ComponentFixture<ItemRequestsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemRequestsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRequestsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
