import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndividualCashbackConfigurationReportRoutingModule } from './individual-cashback-configuration-report-routing.module';
import { IndividualCashbackReportLayoutComponent } from './individual-cashback-report-layout/individual-cashback-report-layout.component';
import { CustomDataTableModule } from '../../components/custom-data-table/custom-data-table.module';


@NgModule({
  declarations: [
    IndividualCashbackReportLayoutComponent
  ],
  imports: [
    CommonModule,
    IndividualCashbackConfigurationReportRoutingModule,
    CustomDataTableModule
  ]
})
export class IndividualCashbackConfigurationReportModule { }
