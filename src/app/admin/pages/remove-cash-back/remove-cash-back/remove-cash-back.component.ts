import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmAlertComponent } from 'src/app/admin/modals/confirm-alert/confirm-alert.component';
import { RemoveCashbackAlertComponent } from 'src/app/admin/modals/remove-cashback-alert/remove-cashback-alert.component';
import { RemoveCashbackListingEditComponent } from 'src/app/admin/modals/remove-cashback-listing-edit/remove-cashback-listing-edit.component';
import { RemoveCashbackListingFilterComponent } from 'src/app/admin/modals/remove-cashback-listing-filter/remove-cashback-listing-filter.component';

@Component({
  selector: 'app-remove-cash-back',
  templateUrl: './remove-cash-back.component.html',
  styleUrls: ['./remove-cash-back.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RemoveCashBackComponent implements OnInit {
  header = [
    {
      title: 'Company Name',
      key: 'name',
    },
    {
      title: 'Cash Back Credit OK$ Account',
      key: 'account'
    },
    {
      title: 'OK$ Account Type',
      key: 'type'
    },
    {
      title: 'Operator Name',
      key: 'operator'
    },
    {
      title: 'Company Name',
      key: 'name'
    },
    {
      title: 'Cash Back Credit OK$ Account',
      key: 'account'
    },
    {
      title: 'OK$ Account Type',
      key: 'type'
    },
    {
      title: 'Operator Name',
      key: 'operator'
    }
  ];
  data = [
    {
      name: 'CGM',
      account: '765745454',
      type: 'Merchant',
      operator: 'MPT'
    },
    {
      name: 'OK $',
      account: '7657454454454',
      type: 'Personal',
      operator: 'Telenor'
    },
    {
      name: 'GAT',
      account: '765745454656',
      type: 'Advance Merchant',
      operator: 'MPT'
    },
    {
      name: 'One Stop Supermarket',
      account: '765745435454',
      type: 'Merchant',
      operator: 'MPT'
    },
    {
      name: 'OK $ Taxi',
      account: '765435745454',
      type: 'Merchant',
      operator: 'Telenor'
    },
    {
      name: 'CGM',
      account: '765745454',
      type: 'Merchant',
      operator: 'MPT'
    },
    {
      name: 'OK $',
      account: '7657454454454',
      type: 'Personal',
      operator: 'Telenor'
    },
    {
      name: 'GAT',
      account: '765745454656',
      type: 'Advance Merchant',
      operator: 'MPT'
    },
    {
      name: 'One Stop Supermarket',
      account: '765745435454',
      type: 'Merchant',
      operator: 'MPT'
    },
    {
      name: 'OK $ Taxi',
      account: '765435745454',
      type: 'Merchant',
      operator: 'Telenor'
    },
    {
      name: 'GAT',
      account: '765745454656',
      type: 'Advance Merchant',
      operator: 'MPT'
    },
    {
      name: 'One Stop Supermarket',
      account: '765745435454',
      type: 'Merchant',
      operator: 'MPT'
    },
    {
      name: 'OK $ Taxi',
      account: '765435745454',
      type: 'Merchant',
      operator: 'Telenor'
    },
    {
      name: 'OK $',
      account: '7657454454454',
      type: 'Personal',
      operator: 'Telenor'
    },
    {
      name: 'GAT',
      account: '765745454656',
      type: 'Advance Merchant',
      operator: 'MPT'
    },
    {
      name: 'One Stop Supermarket',
      account: '765745435454',
      type: 'Merchant',
      operator: 'MPT'
    },
    {
      name: 'OK $ Taxi',
      account: '765435745454',
      type: 'Merchant',
      operator: 'Telenor'
    },
  ]
  actions = [
    {
      type: 'delete',
      icon: 'assets/images/delete.png'
      },
    {
      type: 'edit',
      icon: 'assets/images/edit.png'
    }
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  actionEvent(event: any) {
    console.log(event);
    if (event.type == "edit") {
      const dialogRef = this.dialog.open(RemoveCashbackListingEditComponent, {
        width: '750px',
        data: {}
        });

        dialogRef.afterClosed().subscribe(result => {
          if(result){
          }
      });
    }
    if (event.type == "delete") {
      const dialogRef = this.dialog.open(ConfirmAlertComponent, {
        width: '550px',
        data: {
          message: 'Are you sure want to remove this cash back setting?',
          confirmButtonText: 'YES',
          cancelButtonText: 'NO'
        }
        });

        dialogRef.afterClosed().subscribe(result => {
          if(result){
            const dialogRef = this.dialog.open(RemoveCashbackAlertComponent, {
              width: '550px',
              data: {}
              });

              dialogRef.afterClosed().subscribe(result => {
                if(result){

                }
            });
          }
      });
    }
  }

  fetchDataEvent(event: any) {
  }

  filterTable(){
    const dialogRef = this.dialog.open(RemoveCashbackListingFilterComponent, {
      width: '850px',
      data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result){}
    });
  }

  itemCustomCLickHandler (data: any) {
  }
}
