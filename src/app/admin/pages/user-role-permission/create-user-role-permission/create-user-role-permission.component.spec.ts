import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserRolePermissionComponent } from './create-user-role-permission.component';

describe('CreateUserRolePermissionComponent', () => {
  let component: CreateUserRolePermissionComponent;
  let fixture: ComponentFixture<CreateUserRolePermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserRolePermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserRolePermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
