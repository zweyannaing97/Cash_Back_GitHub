import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';

import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { ForgotPasswordLayoutComponent } from './components/forgot-password-layout/forgot-password-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EnterOtpComponent } from './components/enter-otp/enter-otp.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ChangePswrdComponent } from './components/change-pswrd/change-pswrd.component';

@NgModule({
  declarations: [
    LoginLayoutComponent,
    ForgotPasswordLayoutComponent,
    EnterOtpComponent,
    ChangePswrdComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatInputModule,
    MatCheckboxModule,
    ShowHidePasswordModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSnackBarModule
  ]
})
export class LoginModule { }
