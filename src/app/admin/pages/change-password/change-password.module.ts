import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { ChangePasswordLayoutComponent } from './change-password-layout/change-password-layout.component';
import { MatRippleModule } from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    ChangePasswordLayoutComponent
  ],
    imports: [
        CommonModule,
        ChangePasswordRoutingModule,
        MatRippleModule,
        MatToolbarModule
    ]
})
export class ChangePasswordModule { }
