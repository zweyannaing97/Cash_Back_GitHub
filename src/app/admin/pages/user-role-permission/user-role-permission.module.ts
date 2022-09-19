import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRolePermissionRoutingModule } from './user-role-permission-routing.module';
import { CustomDataTableModule } from '../../components/custom-data-table/custom-data-table.module';
import { UserRolePermissionComponent } from './user-role-permission/user-role-permission.component';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { CreateUserRolePermissionComponent } from './create-user-role-permission/create-user-role-permission.component';
import { EditUserRolePermissionComponent } from './edit-user-role-permission/edit-user-role-permission.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [

    UserRolePermissionComponent,
     CreateUserRolePermissionComponent,
     EditUserRolePermissionComponent ,
  ],
    imports: [
        CommonModule,
        UserRolePermissionRoutingModule,
        MatFormFieldModule,
        MatIconModule,
        MatSelectModule,
        MatInputModule,
        MatRadioModule,
        MatTableModule,
        MatPaginatorModule,
        CustomDataTableModule,
        MatToolbarModule,
        MatTooltipModule,
        MatChipsModule,
        MatCheckboxModule,
        MatButtonModule,
    ]
})
export class UserRolePermissionModule { }
