import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyEditRoutingModule } from './company-edit-routing.module';
import { CompanyEditComponent } from './company-edit.component';


@NgModule({
  declarations: [
    CompanyEditComponent
  ],
  imports: [
    CommonModule,
    CompanyEditRoutingModule
  ]
})
export class CompanyEditModule { }
