import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-cashback-state-divison-dashboard-filter',
  templateUrl: './cashback-state-divison-dashboard-filter.component.html',
  styleUrls: ['./cashback-state-divison-dashboard-filter.component.scss']
})
export class CashbackStateDivisonDashboardFilterComponent implements OnInit {

  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined; maxDate = new Date();

  constructor(public dialogRef: MatDialogRef<CashbackStateDivisonDashboardFilterComponent>) { }

  ngOnInit(): void {
  }

  onDismiss(){
    this.dialogRef.close();
  }
}
