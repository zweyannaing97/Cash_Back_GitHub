import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {BsDatepickerDirective} from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-operator-wise-detail-report-filter',
  templateUrl: './operator-wise-detail-report-filter.component.html',
  styleUrls: ['./operator-wise-detail-report-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OperatorWiseDetailReportFilterComponent implements OnInit {
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined; maxDate = new Date();

  constructor(public dialogRef: MatDialogRef<OperatorWiseDetailReportFilterComponent>) { }

  ngOnInit(): void {
  }

  onDismiss(){
    this.dialogRef.close();
  }
}
