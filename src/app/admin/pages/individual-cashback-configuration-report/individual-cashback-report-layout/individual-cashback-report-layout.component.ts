import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IndividualCashBackReportFilterComponent } from 'src/app/admin/modals/individual-cash-back-report-filter/individual-cash-back-report-filter.component';

@Component({
  selector: 'app-individual-cashback-report-layout',
  templateUrl: './individual-cashback-report-layout.component.html',
  styleUrls: ['./individual-cashback-report-layout.component.scss']
})
export class IndividualCashbackReportLayoutComponent implements OnInit {


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
      title: 'Is Active Name',
      key: 'active'
      },
      {
      title: 'Date & Time',
      key: 'date_time'
      },
    ];
    data = [
    {
      name: 'CGM',
      account: '765745454',
      type: 'Merchant',
      operator: 'MPT',
      active: 'Yes',
      date_time: 'Fri,08-Jun-2021 12:10:20'
    },
    {
      name: 'OK $',
      account: '7657454454454',
      type: 'Personal',
      operator: 'Telenor',
      active: 'Yes',
      date_time: 'Fri,08-Jun-2021 12:10:20'
    },
    {
      name: 'GAT',
      account: '765745454656',
      type: 'Advance Merchant',
      operator: 'MPT',
      active: 'Yes',
      date_time: 'Fri,08-Jun-2021 12:10:20'
    },
    {
      name: 'One Stop Supermarket',
      account: '765745435454',
      type: 'Merchant',
      operator: 'MPT',
      active: 'Yes',
      date_time: 'Fri,08-Jun-2021 12:10:20'
    },
    {
      name: 'OK $ Taxi',
      account: '765435745454',
      type: 'Merchant',
      operator: 'Telenor',
      active: 'Yes',
      date_time: 'Fri,08-Jun-2021 12:10:20'
    },
    {
      name: 'CGM',
      account: '765745454',
      type: 'Merchant',
      operator: 'MPT',
      active: 'Yes',
      date_time: 'Fri,08-Jun-2021 12:10:20'
    },
    {
      name: 'OK $ Taxi',
      account: '765435745454',
      type: 'Merchant',
      operator: 'Telenor',
      active: 'Yes',
      date_time: 'Fri,08-Jun-2021 12:10:20'
    },
    {
      name: 'OK $',
      account: '7657454454454',
      type: 'Personal',
      operator: 'Telenor',
      active: 'Yes',
      date_time: 'Fri,08-Jun-2021 12:10:20'
    },
    {
      name: 'GAT',
      account: '765745454656',
      type: 'Advance Merchant',
      operator: 'MPT',
      active: 'Yes',
      date_time: 'Fri,08-Jun-2021 12:10:20'
    },
    {
      name: 'One Stop Supermarket',
      account: '765745435454',
      type: 'Merchant',
      operator: 'MPT',
      active: 'Yes',
      date_time: 'Fri,08-Jun-2021 12:10:20'
    },
    {
      name: 'OK $ Taxi',
      account: '765435745454',
      type: 'Merchant',
      operator: 'Telenor',
      active: 'Yes',
      date_time: 'Fri,08-Jun-2021 12:10:20'
    },
    ]

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  filterTable(){
    const dialogRef = this.dialog.open(IndividualCashBackReportFilterComponent, {
      width: '50vw',
      data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result){}
    });
  }

  fetchDataEvent(event: any){

  }
}
