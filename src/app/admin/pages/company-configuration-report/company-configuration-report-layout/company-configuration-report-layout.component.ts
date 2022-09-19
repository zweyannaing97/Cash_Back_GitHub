import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CompanyConfigurationReportFilterComponent } from 'src/app/admin/modals/company-configuration-report-filter/company-configuration-report-filter.component';

@Component({
  selector: 'app-company-configuration-report-layout',
  templateUrl: './company-configuration-report-layout.component.html',
  styleUrls: ['./company-configuration-report-layout.component.scss']
})
export class CompanyConfigurationReportLayoutComponent implements OnInit {

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


  fetchDataEvent(event: any) {
    console.log(event);
  }

  filterTable(){
    const dialogRef = this.dialog.open(CompanyConfigurationReportFilterComponent, {
      width: '950px',
      data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result){}
    });
  }
}
