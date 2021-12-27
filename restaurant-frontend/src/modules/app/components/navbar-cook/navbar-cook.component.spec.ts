import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCookComponent } from './navbar-cook.component';

describe('NavbarCookComponent', () => {
  let component: NavbarCookComponent;
  let fixture: ComponentFixture<NavbarCookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarCookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarCookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
