import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-remove-cashback-listing-edit',
  templateUrl: './remove-cashback-listing-edit.component.html',
  styleUrls: ['./remove-cashback-listing-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RemoveCashbackListingEditComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<RemoveCashbackListingEditComponent>) { }

  ngOnInit(): void {
  }

  onDismiss(){
    this.dialogRef.close();
  }
}
