import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-cashback-amount-percentage-dashboard-filter',
  templateUrl: './cashback-amount-percentage-dashboard-filter.component.html',
  styleUrls: ['./cashback-amount-percentage-dashboard-filter.component.scss']
})
export class CashbackAmountPercentageDashboardFilterComponent implements OnInit {

  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined; maxDate = new Date();

  constructor(public dialogRef: MatDialogRef<CashbackAmountPercentageDashboardFilterComponent>) { }

  ngOnInit(): void {
  }

  onDismiss(){
    this.dialogRef.close();
  }


}
