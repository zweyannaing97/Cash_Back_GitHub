import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BulkCashBackConfigurationRoutingModule } from './bulk-cash-back-configuration-routing.module';
import { BulkCashBackConfigurationLayoutComponent } from './bulk-cash-back-configuration-layout/bulk-cash-back-configuration-layout.component';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CustomDataTableModule } from '../../components/custom-data-table/custom-data-table.module';
import { CustomFileDataTableModule } from '../../components/custom-file-data-table/custom-file-data-table.module';


@NgModule({
  declarations: [
    BulkCashBackConfigurationLayoutComponent
  ],
  imports: [
    CommonModule,
    BulkCashBackConfigurationRoutingModule,
    MatSelectModule,
    MatTooltipModule,
    CustomDataTableModule,
    CustomFileDataTableModule
  ]
})
export class BulkCashBackConfigurationModule { }
