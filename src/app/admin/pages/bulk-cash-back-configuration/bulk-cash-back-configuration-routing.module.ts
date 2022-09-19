import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BulkCashBackConfigurationLayoutComponent } from './bulk-cash-back-configuration-layout/bulk-cash-back-configuration-layout.component';

const routes: Routes = [
  {
    path: '', 
    component: BulkCashBackConfigurationLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BulkCashBackConfigurationRoutingModule { }
