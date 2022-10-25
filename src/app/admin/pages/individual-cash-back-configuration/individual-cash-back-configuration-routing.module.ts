import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndividualCashBackConfigurationLayoutComponent } from './individual-cash-back-configuration-layout/individual-cash-back-configuration-layout.component';
import { IndividualCashBackConfigurationListingComponent } from './individual-cash-back-configuration-listing/individual-cash-back-configuration-listing.component';

const routes: Routes = [
  {
    path: '', 
    component: IndividualCashBackConfigurationListingComponent
  },
  {
    path: 'create-individual-cashback-configuration', 
    component: IndividualCashBackConfigurationLayoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndividualCashBackConfigurationRoutingModule { }
