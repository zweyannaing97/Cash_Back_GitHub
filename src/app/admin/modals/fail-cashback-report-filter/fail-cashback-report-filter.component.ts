import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-fail-cashback-report-filter',
  templateUrl: './fail-cashback-report-filter.component.html',
  styleUrls: ['./fail-cashback-report-filter.component.scss']
})
export class FailCashbackReportFilterComponent implements OnInit {

  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined; maxDate = new Date();

  selectedCategory: any = [];
  constructor(public dialogRef: MatDialogRef<FailCashbackReportFilterComponent>) { }

  ngOnInit(): void {
  }

  onDismiss(){
    this.dialogRef.close();
  }

  serviceCtegorySelected(category: any){
    this.selectedCategory = [...category];
  }

}
