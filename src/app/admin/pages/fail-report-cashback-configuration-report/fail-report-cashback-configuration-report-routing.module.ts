import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FailReportCashbackReportLayoutComponent } from './fail-report-cashback-report-layout/fail-report-cashback-report-layout.component';

const routes: Routes = [
  {
    path: '', 
    component: FailReportCashbackReportLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FailReportCashbackConfigurationReportRoutingModule { }
