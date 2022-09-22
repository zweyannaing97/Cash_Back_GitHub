import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompanyListingComponent} from './company-listing.component';

const routes: Routes = [{
  path: '',
  component: CompanyListingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyListingRoutingModule { }
