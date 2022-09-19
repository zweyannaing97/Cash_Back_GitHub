import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileDataTableComponent } from './file-data-table/file-data-table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [
    FileDataTableComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatMenuModule,
  ],
  exports: [
    FileDataTableComponent
  ]
})
export class CustomFileDataTableModule { }
