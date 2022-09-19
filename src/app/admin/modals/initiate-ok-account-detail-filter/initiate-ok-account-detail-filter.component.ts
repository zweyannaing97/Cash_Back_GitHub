import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {BsDatepickerDirective} from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-initiate-ok-account-detail-filter',
  templateUrl: './initiate-ok-account-detail-filter.component.html',
  styleUrls: ['./initiate-ok-account-detail-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InitiateOkAccountDetailFilterComponent implements OnInit {
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined; maxDate = new Date();

  constructor(public dialogRef: MatDialogRef<InitiateOkAccountDetailFilterComponent>) { }

  ngOnInit(): void {
  }

  onDismiss(){
    this.dialogRef.close();
  }
}
