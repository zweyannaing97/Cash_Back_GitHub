import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsCreateRoutingModule } from './departments-create-routing.module';
import { DepartmentsCreateComponent } from './departments-create.component';


@NgModule({
  declarations: [
    DepartmentsCreateComponent
  ],
  imports: [
    CommonModule,
    DepartmentsCreateRoutingModule
  ]
})
export class DepartmentsCreateModule { }
