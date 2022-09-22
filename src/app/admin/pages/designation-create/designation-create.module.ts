import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignationCreateRoutingModule } from './designation-create-routing.module';
import { DesignationCreateComponent } from './designation-create.component';


@NgModule({
  declarations: [
    DesignationCreateComponent
  ],
  imports: [
    CommonModule,
    DesignationCreateRoutingModule
  ]
})
export class DesignationCreateModule { }
