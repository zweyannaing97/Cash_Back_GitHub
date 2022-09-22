import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DesignationCreateComponent} from './designation-create.component';

const routes: Routes = [{
  path: '',
  component: DesignationCreateComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignationCreateRoutingModule { }
