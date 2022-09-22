import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DesignationComponent} from './designation.component';

const routes: Routes = [{
  path: '',
  component: DesignationComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignationRoutingModule { }
