import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitiateOkAccountDetailLayoutComponent } from './initiate-ok-account-detail-layout/initiate-ok-account-detail-layout.component';

const routes: Routes = [
  {
    path: '', 
    component: InitiateOkAccountDetailLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitiateOkAccountDetailRoutingModule { }
