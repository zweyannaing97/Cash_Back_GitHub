import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InitiateOkAccountSummaryFilterComponent } from 'src/app/admin/modals/initiate-ok-account-summary-filter/initiate-ok-account-summary-filter.component';

@Component({
  selector: 'app-initiate-ok-account-summary-layout',
  templateUrl: './initiate-ok-account-summary-layout.component.html',
  styleUrls: ['./initiate-ok-account-summary-layout.component.scss']
})
export class InitiateOkAccountSummaryLayoutComponent implements OnInit {

  header = [
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

  fetchDataEvent(event: any){

  }

  filterTable(){
    const dialogRef = this.dialog.open(InitiateOkAccountSummaryFilterComponent, {
      width: '50vw',
      data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result){}
    });
  }
}
