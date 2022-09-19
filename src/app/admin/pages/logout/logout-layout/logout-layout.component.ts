import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router,Event, NavigationEnd } from '@angular/router';
import { ConfirmAlertComponent } from 'src/app/admin/modals/confirm-alert/confirm-alert.component';

@Component({
  selector: 'app-logout-layout',
  templateUrl: './logout-layout.component.html',
  styleUrls: ['./logout-layout.component.scss']
})
export class LogoutLayoutComponent implements OnInit {

  constructor(public router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.logout();
  }

  logout(){
    const dialogRef = this.dialog.open(ConfirmAlertComponent, {
      width: '550px',
      data: {
        message: 'Do you sure want to logout?',
        confirmButtonText: 'YES',
        cancelButtonText: 'NO',
        image: 'assets/images/logout_confirm.png'
      }
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result) {
          this.router.navigate(['/login']);
        }
        else {
        }
    });
  }
}
