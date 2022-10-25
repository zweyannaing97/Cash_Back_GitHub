import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BulkCashbackReportLayoutComponent } from './bulk-cashback-report-layout/bulk-cashback-report-layout.component';
import { ViewBulkCashbackConfigurationReportComponent } from './view-bulk-cashback-configuration-report/view-bulk-cashback-configuration-report.component';

const routes: Routes = [
  {
    path: '', 
    component: BulkCashbackReportLayoutComponent
  },
  {
    path: 'view-bulk-cashback-configuration-report', 
    component: ViewBulkCashbackConfigurationReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BulkCashbackConfigurationReportRoutingModule { }
