import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyConfigurationReportLayoutComponent } from './company-configuration-report-layout/company-configuration-report-layout.component';

const routes: Routes = [
  {
    path: '', 
    component: CompanyConfigurationReportLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyConfigurationReportRoutingModule { }
