import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemoveCashBackComponent } from './remove-cash-back/remove-cash-back.component';

const routes: Routes = [
  {
    path: '', 
    component: RemoveCashBackComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemoveCashBackRoutingModule { }
