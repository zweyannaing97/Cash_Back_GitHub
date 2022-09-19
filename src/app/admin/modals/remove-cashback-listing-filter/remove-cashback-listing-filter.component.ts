import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {BsDatepickerDirective} from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-remove-cashback-listing-filter',
  templateUrl: './remove-cashback-listing-filter.component.html',
  styleUrls: ['./remove-cashback-listing-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RemoveCashbackListingFilterComponent implements OnInit {
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined; maxDate = new Date();

  constructor(public dialogRef: MatDialogRef<RemoveCashbackListingFilterComponent>) { }

  ngOnInit(): void {
  }

  onDismiss(){
    this.dialogRef.close();
  }

}
