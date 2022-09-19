import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';



@Component({
  selector: 'app-user-role-permission-filter',
  templateUrl: './user-role-permission-filter.component.html',
  styleUrls: ['./user-role-permission-filter.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class UserRolePermissionFilterComponent implements OnInit {
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined; maxDate = new Date();

  constructor(public dialogRef: MatDialogRef<UserRolePermissionFilterComponent>) { }

  ngOnInit(): void {
  }

  onDismiss(){
    this.dialogRef.close();
  }

}


