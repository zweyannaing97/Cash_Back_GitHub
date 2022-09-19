import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRolePermissionFilterComponent } from './user-role-permission-filter.component';

describe('UserRolePermissionFilterComponent', () => {
  let component: UserRolePermissionFilterComponent;
  let fixture: ComponentFixture<UserRolePermissionFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRolePermissionFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRolePermissionFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
