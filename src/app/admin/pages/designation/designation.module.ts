import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignationRoutingModule } from './designation-routing.module';
import { DesignationComponent } from './designation.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    DesignationComponent
  ],
  imports: [
    CommonModule,
    DesignationRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatPaginatorModule
  ]
})
export class DesignationModule { }
