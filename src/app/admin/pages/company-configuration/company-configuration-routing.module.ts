import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyConfigurationComponent } from './company-configuration/company-configuration.component';
import { CreateCompanyConfigurationComponent } from './create-company-configuration/create-company-configuration.component';

const routes: Routes = [
  {
    path: '', 
    component: CompanyConfigurationComponent
  },
  {
    path: 'create-company-configuration', 
    component: CreateCompanyConfigurationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyConfigurationRoutingModule { }
