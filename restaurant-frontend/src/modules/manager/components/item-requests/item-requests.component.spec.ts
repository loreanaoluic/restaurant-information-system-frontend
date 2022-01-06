import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRequestsComponent } from './item-requests.component';

describe('ItemRequestsComponent', () => {
  let component: ItemRequestsComponent;
  let fixture: ComponentFixture<ItemRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
