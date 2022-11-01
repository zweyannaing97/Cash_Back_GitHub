import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogData } from 'src/app/utils/models';
import {Location} from '@angular/common';

@Component({
  selector: 'app-confirm-alert',
  templateUrl: './confirm-alert.component.html',
  styleUrls: ['./confirm-alert.component.scss']
})
export class ConfirmAlertComponent implements OnInit {
  constructor(private location: Location, public dialogRef: MatDialogRef<ConfirmAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData) { }

  ngOnInit(): void {
  }

  onDismiss(){
    this.dialogRef.close(false);
  }


  backClicked() {
    this.dialogRef.close(true);
  }

  confirmtask(){
    this.dialogRef.close(true);
  }
}
