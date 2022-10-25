import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyWiseLayoutComponent } from './company-wise-layout/company-wise-layout.component';
import { ViewCompanyWiseReportDetailComponent } from './view-company-wise-report-detail/view-company-wise-report-detail.component';

const routes: Routes = [
  {
    path: '', 
    component: CompanyWiseLayoutComponent
  },
  {
    path: 'view-company-wise-report-detail', 
    component: ViewCompanyWiseReportDetailComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyWiseRoutingModule { }
