import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DepartmentsCreateComponent} from './departments-create.component';

const routes: Routes = [{
  path: '',
  component: DepartmentsCreateComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsCreateRoutingModule { }
