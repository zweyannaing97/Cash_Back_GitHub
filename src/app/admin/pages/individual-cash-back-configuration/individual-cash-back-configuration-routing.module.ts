import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndividualCashBackConfigurationLayoutComponent } from './individual-cash-back-configuration-layout/individual-cash-back-configuration-layout.component';

const routes: Routes = [
  {
    path: '', 
    component: IndividualCashBackConfigurationLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndividualCashBackConfigurationRoutingModule { }
