import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRolePermissionComponent } from './user-role-permission/user-role-permission.component';
import { CreateUserRolePermissionComponent } from './create-user-role-permission/create-user-role-permission.component';
import { EditUserRolePermissionComponent } from './edit-user-role-permission/edit-user-role-permission.component';




const routes: Routes = [
  {
    path: '',
    component: UserRolePermissionComponent
  },
  {
    path: 'create-user-role-permission',
    component: CreateUserRolePermissionComponent
  },
  {
    path: 'edit-user-role-permission',
    component: EditUserRolePermissionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRolePermissionRoutingModule { }
