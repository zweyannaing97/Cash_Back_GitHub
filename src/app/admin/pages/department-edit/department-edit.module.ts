import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentEditRoutingModule } from './department-edit-routing.module';
import { DepartmentEditComponent } from './department-edit.component';


@NgModule({
  declarations: [
    DepartmentEditComponent
  ],
  imports: [
    CommonModule,
    DepartmentEditRoutingModule
  ]
})
export class DepartmentEditModule { }
