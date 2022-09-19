import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordLayoutComponent } from './change-password-layout/change-password-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ChangePasswordLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangePasswordRoutingModule { }
