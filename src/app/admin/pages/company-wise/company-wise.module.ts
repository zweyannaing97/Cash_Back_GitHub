import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyWiseRoutingModule } from './company-wise-routing.module';
import { CompanyWiseLayoutComponent } from './company-wise-layout/company-wise-layout.component';
import { CustomDataTableModule } from '../../components/custom-data-table/custom-data-table.module';
import { CustomFileDataTableModule } from '../../components/custom-file-data-table/custom-file-data-table.module';
import { ViewCompanyWiseReportDetailComponent } from './view-company-wise-report-detail/view-company-wise-report-detail.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    CompanyWiseLayoutComponent,
    ViewCompanyWiseReportDetailComponent
  ],
  imports: [
    CommonModule,
    CompanyWiseRoutingModule,
    CustomDataTableModule,
    CustomFileDataTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
  ]
})
export class CompanyWiseModule { }
