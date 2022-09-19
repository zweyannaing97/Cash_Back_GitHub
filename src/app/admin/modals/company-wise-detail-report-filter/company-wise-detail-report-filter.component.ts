import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {BsDatepickerDirective} from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-company-wise-detail-report-filter',
  templateUrl: './company-wise-detail-report-filter.component.html',
  styleUrls: ['./company-wise-detail-report-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CompanyWiseDetailReportFilterComponent implements OnInit {
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined; maxDate = new Date();

  constructor(public dialogRef: MatDialogRef<CompanyWiseDetailReportFilterComponent>) { }

  ngOnInit(): void {
  }

  onDismiss(){
    this.dialogRef.close();
  }
}
