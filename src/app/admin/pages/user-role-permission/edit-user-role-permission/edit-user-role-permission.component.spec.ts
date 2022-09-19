import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserRolePermissionComponent } from './edit-user-role-permission.component';

describe('EditUserRolePermissionComponent', () => {
  let component: EditUserRolePermissionComponent;
  let fixture: ComponentFixture<EditUserRolePermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserRolePermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserRolePermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
