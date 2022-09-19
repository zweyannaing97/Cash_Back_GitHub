import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorWiseLayoutComponent } from './operator-wise-layout/operator-wise-layout.component';

const routes: Routes = [
  {
    path: '', 
    component: OperatorWiseLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorWiseRoutingModule { }
