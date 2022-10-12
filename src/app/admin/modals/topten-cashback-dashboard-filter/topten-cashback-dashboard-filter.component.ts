import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-topten-cashback-dashboard-filter',
  templateUrl: './topten-cashback-dashboard-filter.component.html',
  styleUrls: ['./topten-cashback-dashboard-filter.component.scss']
})
export class ToptenCashbackDashboardFilterComponent implements OnInit {

  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined; maxDate = new Date();

  constructor(public dialogRef: MatDialogRef<ToptenCashbackDashboardFilterComponent>) { }

  ngOnInit(): void {
  }

  onDismiss(){
    this.dialogRef.close();
  }


}
