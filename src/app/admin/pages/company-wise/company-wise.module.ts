import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyWiseRoutingModule } from './company-wise-routing.module';
import { CompanyWiseLayoutComponent } from './company-wise-layout/company-wise-layout.component';
import { CustomDataTableModule } from '../../components/custom-data-table/custom-data-table.module';
import { CustomFileDataTableModule } from '../../components/custom-file-data-table/custom-file-data-table.module';
import { ViewCompanyWiseReportDetailComponent } from './view-company-wise-report-detail/view-company-wise-report-detail.component';


@NgModule({
  declarations: [
    CompanyWiseLayoutComponent,
    ViewCompanyWiseReportDetailComponent
  ],
  imports: [
    CommonModule,
    CompanyWiseRoutingModule,
    CustomDataTableModule,
    CustomFileDataTableModule
  ]
})
export class CompanyWiseModule { }
