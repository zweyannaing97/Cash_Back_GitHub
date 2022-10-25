import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FailReportCashbackConfigurationReportRoutingModule } from './fail-report-cashback-configuration-report-routing.module';
import { FailReportCashbackReportLayoutComponent } from './fail-report-cashback-report-layout/fail-report-cashback-report-layout.component';
import { CustomFileDataTableModule } from '../../components/custom-file-data-table/custom-file-data-table.module';
import { CustomDataTableModule } from '../../components/custom-data-table/custom-data-table.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ViewFailReportCashbackReportComponent } from './view-fail-report-cashback-report/view-fail-report-cashback-report.component';


@NgModule({
  declarations: [
    FailReportCashbackReportLayoutComponent,
    ViewFailReportCashbackReportComponent
  ],
  imports: [
    CommonModule,
    FailReportCashbackConfigurationReportRoutingModule,
    CustomDataTableModule,
    CustomFileDataTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
  ]
})
export class FailReportCashbackConfigurationReportModule { }
