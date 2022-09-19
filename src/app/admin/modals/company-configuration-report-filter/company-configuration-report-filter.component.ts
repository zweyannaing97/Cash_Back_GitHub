import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {BsDatepickerDirective} from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-company-configuration-report-filter',
  templateUrl: './company-configuration-report-filter.component.html',
  styleUrls: ['./company-configuration-report-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CompanyConfigurationReportFilterComponent implements OnInit {
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined; maxDate = new Date();

  constructor( public dialogRef: MatDialogRef<CompanyConfigurationReportFilterComponent>) { }

  ngOnInit(): void {
  }

  onDismiss(){
    this.dialogRef.close();
  }

  serviceCtegorySelected(category: any){
  }
}
