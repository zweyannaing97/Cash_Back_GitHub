import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentListingRoutingModule } from './department-listing-routing.module';
import { DepartmentListingComponent } from './department-listing.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    DepartmentListingComponent
  ],
  imports: [
    CommonModule,
    DepartmentListingRoutingModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class DepartmentListingModule { }
