import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyListingRoutingModule } from './company-listing-routing.module';
import { CompanyListingComponent } from './company-listing.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    CompanyListingComponent
  ],
  imports: [
    CommonModule,
    CompanyListingRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class CompanyListingModule { }
