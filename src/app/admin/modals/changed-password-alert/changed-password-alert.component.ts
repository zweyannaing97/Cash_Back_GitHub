import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-changed-password-alert',
  templateUrl: './changed-password-alert.component.html',
  styleUrls: ['./changed-password-alert.component.scss']
})
export class ChangedPasswordAlertComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ChangedPasswordAlertComponent>) { }

  ngOnInit(): void {
  }

}
