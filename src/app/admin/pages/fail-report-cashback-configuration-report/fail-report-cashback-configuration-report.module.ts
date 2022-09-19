import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FailReportCashbackConfigurationReportRoutingModule } from './fail-report-cashback-configuration-report-routing.module';
import { FailReportCashbackReportLayoutComponent } from './fail-report-cashback-report-layout/fail-report-cashback-report-layout.component';
import { CustomFileDataTableModule } from '../../components/custom-file-data-table/custom-file-data-table.module';
import { CustomDataTableModule } from '../../components/custom-data-table/custom-data-table.module';


@NgModule({
  declarations: [
    FailReportCashbackReportLayoutComponent
  ],
  imports: [
    CommonModule,
    FailReportCashbackConfigurationReportRoutingModule,
    CustomDataTableModule,
    CustomFileDataTableModule
  ]
})
export class FailReportCashbackConfigurationReportModule { }
