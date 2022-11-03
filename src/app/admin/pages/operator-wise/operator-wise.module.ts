import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorWiseRoutingModule } from './operator-wise-routing.module';
import { OperatorWiseLayoutComponent } from './operator-wise-layout/operator-wise-layout.component';
import { CustomDataTableModule } from '../../components/custom-data-table/custom-data-table.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    OperatorWiseLayoutComponent
  ],
  imports: [
    CommonModule,
    OperatorWiseRoutingModule,
    CustomDataTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
  ]
})
export class OperatorWiseModule { }
