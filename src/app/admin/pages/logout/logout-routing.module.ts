import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutLayoutComponent } from './logout-layout/logout-layout.component';

const routes: Routes = [
  {
    path: '', 
    component: LogoutLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogoutRoutingModule { }
