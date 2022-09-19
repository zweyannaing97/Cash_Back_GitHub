import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyWiseLayoutComponent } from './company-wise-layout/company-wise-layout.component';

const routes: Routes = [
  {
    path: '', 
    component: CompanyWiseLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyWiseRoutingModule { }
