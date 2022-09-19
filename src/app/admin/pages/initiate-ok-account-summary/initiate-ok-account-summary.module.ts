import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitiateOkAccountSummaryRoutingModule } from './initiate-ok-account-summary-routing.module';
import { InitiateOkAccountSummaryLayoutComponent } from './initiate-ok-account-summary-layout/initiate-ok-account-summary-layout.component';
import { CustomDataTableModule } from '../../components/custom-data-table/custom-data-table.module';


@NgModule({
  declarations: [
    InitiateOkAccountSummaryLayoutComponent
  ],
  imports: [
    CommonModule,
    InitiateOkAccountSummaryRoutingModule,
    CustomDataTableModule
  ]
})
export class InitiateOkAccountSummaryModule { }
