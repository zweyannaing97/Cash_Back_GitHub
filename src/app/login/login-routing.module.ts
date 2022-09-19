import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordLayoutComponent } from './components/forgot-password-layout/forgot-password-layout.component';
import { LoginLayoutComponent } from "./components/login-layout/login-layout.component";
const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [],
  },
  {
    path: 'forgotPassword',
    component: ForgotPasswordLayoutComponent,
    children: [],
  },
  // {
  //   path: 'resetPassword',
  //   component: ResetPasswordComponent,
  //   children: [],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
