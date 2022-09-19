import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {BsDatepickerDirective} from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-individual-cash-back-report-filter',
  templateUrl: './individual-cash-back-report-filter.component.html',
  styleUrls: ['./individual-cash-back-report-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IndividualCashBackReportFilterComponent implements OnInit {
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined; maxDate = new Date();

  selectedCategory: any = [];
  constructor(public dialogRef: MatDialogRef<IndividualCashBackReportFilterComponent>) { }

  ngOnInit(): void {
  }

  onDismiss(){
    this.dialogRef.close();
  }

  serviceCtegorySelected(category: any){
    this.selectedCategory = [...category];
  }
}
