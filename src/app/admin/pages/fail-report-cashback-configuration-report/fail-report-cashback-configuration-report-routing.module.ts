import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FailReportCashbackReportLayoutComponent } from './fail-report-cashback-report-layout/fail-report-cashback-report-layout.component';
import { ViewFailReportCashbackReportComponent } from './view-fail-report-cashback-report/view-fail-report-cashback-report.component';

const routes: Routes = [
  {
    path: '', 
    component: FailReportCashbackReportLayoutComponent
  },
  {
    path: 'view-fail-report-cashback-report', 
    component: ViewFailReportCashbackReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FailReportCashbackConfigurationReportRoutingModule { }
