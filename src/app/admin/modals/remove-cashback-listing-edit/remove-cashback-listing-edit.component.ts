import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-remove-cashback-listing-edit',
  templateUrl: './remove-cashback-listing-edit.component.html',
  styleUrls: ['./remove-cashback-listing-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RemoveCashbackListingEditComponent implements OnInit {
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined; maxDate = new Date();
  constructor( public dialogRef: MatDialogRef<RemoveCashbackListingEditComponent>) { }

  ngOnInit(): void {
  }

  onDismiss(){
    this.dialogRef.close();
  }
}
