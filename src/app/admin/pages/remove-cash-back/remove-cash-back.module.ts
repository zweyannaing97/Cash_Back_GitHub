import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoveCashBackRoutingModule } from './remove-cash-back-routing.module';
import { RemoveCashBackComponent } from './remove-cash-back/remove-cash-back.component';
import { CustomDataTableModule } from '../../components/custom-data-table/custom-data-table.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    RemoveCashBackComponent
  ],
    imports: [
        CommonModule,
        RemoveCashBackRoutingModule,
        CustomDataTableModule,
        MatTooltipModule,
        MatPaginatorModule,
        MatToolbarModule,
        MatTableModule,
    ]
})
export class RemoveCashBackModule { }
