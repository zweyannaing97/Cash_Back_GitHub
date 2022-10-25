import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyConfigurationReportRoutingModule } from './company-configuration-report-routing.module';
import { CompanyConfigurationReportLayoutComponent } from './company-configuration-report-layout/company-configuration-report-layout.component';
import { CustomDataTableModule } from '../../components/custom-data-table/custom-data-table.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    CompanyConfigurationReportLayoutComponent
  ],
  imports: [
    CommonModule,
    CompanyConfigurationReportRoutingModule,
    CustomDataTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
  ]
})
export class CompanyConfigurationReportModule { }
