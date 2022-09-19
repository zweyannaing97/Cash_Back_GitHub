import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitiateOkAccountSummaryLayoutComponent } from './initiate-ok-account-summary-layout/initiate-ok-account-summary-layout.component';

const routes: Routes = [
  {
    path: '', 
    component: InitiateOkAccountSummaryLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitiateOkAccountSummaryRoutingModule { }
