import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangedPasswordAlertComponent } from 'src/app/admin/modals/changed-password-alert/changed-password-alert.component';

@Component({
  selector: 'app-change-password-layout',
  templateUrl: './change-password-layout.component.html',
  styleUrls: ['./change-password-layout.component.scss']
})
export class ChangePasswordLayoutComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  changePassword(){
    const dialogRef = this.dialog.open(ChangedPasswordAlertComponent, {
      width: '550px',
      data: {}
      });
    
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          
        }
    }); 
  }
}
