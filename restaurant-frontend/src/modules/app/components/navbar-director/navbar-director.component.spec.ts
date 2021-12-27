import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDirectorComponent } from './navbar-director.component';

describe('NavbarDirectorComponent', () => {
  let component: NavbarDirectorComponent;
  let fixture: ComponentFixture<NavbarDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarDirectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
