import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {BsDatepickerDirective} from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-initiate-ok-account-summary-filter',
  templateUrl: './initiate-ok-account-summary-filter.component.html',
  styleUrls: ['./initiate-ok-account-summary-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InitiateOkAccountSummaryFilterComponent implements OnInit {
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined; maxDate = new Date();

  constructor(public dialogRef: MatDialogRef<InitiateOkAccountSummaryFilterComponent>) { }

  ngOnInit(): void {
  }

  onDismiss(){
    this.dialogRef.close();
  }
}
