import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DepartmentListingComponent} from './department-listing.component';

const routes: Routes = [{
  path: '',
  component: DepartmentListingComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentListingRoutingModule { }
