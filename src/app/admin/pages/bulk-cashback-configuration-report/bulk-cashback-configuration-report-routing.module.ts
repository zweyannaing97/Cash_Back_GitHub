import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BulkCashbackReportLayoutComponent } from './bulk-cashback-report-layout/bulk-cashback-report-layout.component';

const routes: Routes = [
  {
    path: '', 
    component: BulkCashbackReportLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BulkCashbackConfigurationReportRoutingModule { }
