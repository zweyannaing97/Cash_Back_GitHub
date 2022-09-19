import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorWiseRoutingModule } from './operator-wise-routing.module';
import { OperatorWiseLayoutComponent } from './operator-wise-layout/operator-wise-layout.component';
import { CustomDataTableModule } from '../../components/custom-data-table/custom-data-table.module';


@NgModule({
  declarations: [
    OperatorWiseLayoutComponent
  ],
  imports: [
    CommonModule,
    OperatorWiseRoutingModule,
    CustomDataTableModule
  ]
})
export class OperatorWiseModule { }
