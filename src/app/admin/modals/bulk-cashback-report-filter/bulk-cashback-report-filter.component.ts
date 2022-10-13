import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-bulk-cashback-report-filter',
  templateUrl: './bulk-cashback-report-filter.component.html',
  styleUrls: ['./bulk-cashback-report-filter.component.scss']
})
export class BulkCashbackReportFilterComponent implements OnInit {

  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined; maxDate = new Date();

  selectedCategory: any = [];
  constructor(public dialogRef: MatDialogRef<BulkCashbackReportFilterComponent>) { }

  ngOnInit(): void {
  }

  onDismiss(){
    this.dialogRef.close();
  }

  serviceCtegorySelected(category: any){
    this.selectedCategory = [...category];
  }

}
