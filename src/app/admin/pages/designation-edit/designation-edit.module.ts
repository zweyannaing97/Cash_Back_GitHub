import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignationEditRoutingModule } from './designation-edit-routing.module';
import { DesignationEditComponent } from './designation-edit.component';


@NgModule({
  declarations: [
    DesignationEditComponent
  ],
  imports: [
    CommonModule,
    DesignationEditRoutingModule
  ]
})
export class DesignationEditModule { }
