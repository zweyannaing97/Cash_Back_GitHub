import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DesignationEditComponent} from './designation-edit.component';

const routes: Routes = [{
  path: '',
  component: DesignationEditComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignationEditRoutingModule { }
