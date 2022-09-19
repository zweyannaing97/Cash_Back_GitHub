import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyWiseRoutingModule } from './company-wise-routing.module';
import { CompanyWiseLayoutComponent } from './company-wise-layout/company-wise-layout.component';
import { CustomDataTableModule } from '../../components/custom-data-table/custom-data-table.module';
import { CustomFileDataTableModule } from '../../components/custom-file-data-table/custom-file-data-table.module';


@NgModule({
  declarations: [
    CompanyWiseLayoutComponent
  ],
  imports: [
    CommonModule,
    CompanyWiseRoutingModule,
    CustomDataTableModule,
    CustomFileDataTableModule
  ]
})
export class CompanyWiseModule { }
