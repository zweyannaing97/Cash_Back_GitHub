import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndividualCashbackConfigurationReportRoutingModule } from './individual-cashback-configuration-report-routing.module';
import { IndividualCashbackReportLayoutComponent } from './individual-cashback-report-layout/individual-cashback-report-layout.component';
import { CustomDataTableModule } from '../../components/custom-data-table/custom-data-table.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    IndividualCashbackReportLayoutComponent
  ],
  imports: [
    CommonModule,
    IndividualCashbackConfigurationReportRoutingModule,
    CustomDataTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatTableModule,
  ]
})
export class IndividualCashbackConfigurationReportModule { }
