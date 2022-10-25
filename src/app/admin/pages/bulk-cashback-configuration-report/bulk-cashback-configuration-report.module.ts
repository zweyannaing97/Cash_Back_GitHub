import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BulkCashbackConfigurationReportRoutingModule } from './bulk-cashback-configuration-report-routing.module';
import { BulkCashbackReportLayoutComponent } from './bulk-cashback-report-layout/bulk-cashback-report-layout.component';
import { CustomDataTableModule } from '../../components/custom-data-table/custom-data-table.module';
import { CustomFileDataTableModule } from '../../components/custom-file-data-table/custom-file-data-table.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ViewBulkCashbackConfigurationReportComponent } from './view-bulk-cashback-configuration-report/view-bulk-cashback-configuration-report.component';


@NgModule({
  declarations: [
    BulkCashbackReportLayoutComponent,
    ViewBulkCashbackConfigurationReportComponent
  ],
  imports: [
    CommonModule,
    BulkCashbackConfigurationReportRoutingModule,
    CustomDataTableModule,
    CustomFileDataTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
  ]
})
export class BulkCashbackConfigurationReportModule { }
