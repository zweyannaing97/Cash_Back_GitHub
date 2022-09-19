import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndividualCashbackReportLayoutComponent } from './individual-cashback-report-layout/individual-cashback-report-layout.component';

const routes: Routes = [
  {
    path: '', 
    component: IndividualCashbackReportLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndividualCashbackConfigurationReportRoutingModule { }
