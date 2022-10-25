import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitiateOkAccountDetailRoutingModule } from './initiate-ok-account-detail-routing.module';
import { InitiateOkAccountDetailLayoutComponent } from './initiate-ok-account-detail-layout/initiate-ok-account-detail-layout.component';
import { CustomDataTableModule } from '../../components/custom-data-table/custom-data-table.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    InitiateOkAccountDetailLayoutComponent
  ],
  imports: [
    CommonModule,
    InitiateOkAccountDetailRoutingModule,
    CustomDataTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
  ]
})
export class InitiateOkAccountDetailModule { }
