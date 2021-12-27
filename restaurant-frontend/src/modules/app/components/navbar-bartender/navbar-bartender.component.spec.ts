import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBartenderComponent } from './navbar-bartender.component';

describe('NavbarBartenderComponent', () => {
  let component: NavbarBartenderComponent;
  let fixture: ComponentFixture<NavbarBartenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarBartenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarBartenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
