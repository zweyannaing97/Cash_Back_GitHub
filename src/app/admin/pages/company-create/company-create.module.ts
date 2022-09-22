import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyCreateRoutingModule } from './company-create-routing.module';
import { CompanyCreateComponent } from './company-create.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    CompanyCreateComponent
  ],
  imports: [
    CommonModule,
    CompanyCreateRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class CompanyCreateModule { }
