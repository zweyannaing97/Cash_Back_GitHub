import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BulkCashbackConfigurationReportRoutingModule } from './bulk-cashback-configuration-report-routing.module';
import { BulkCashbackReportLayoutComponent } from './bulk-cashback-report-layout/bulk-cashback-report-layout.component';
import { CustomDataTableModule } from '../../components/custom-data-table/custom-data-table.module';
import { CustomFileDataTableModule } from '../../components/custom-file-data-table/custom-file-data-table.module';


@NgModule({
  declarations: [
    BulkCashbackReportLayoutComponent
  ],
  imports: [
    CommonModule,
    BulkCashbackConfigurationReportRoutingModule,
    CustomDataTableModule,
    CustomFileDataTableModule
  ]
})
export class BulkCashbackConfigurationReportModule { }
