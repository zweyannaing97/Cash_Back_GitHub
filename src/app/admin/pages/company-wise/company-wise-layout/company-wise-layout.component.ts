import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CompanyWiseDetailReportFilterComponent } from 'src/app/admin/modals/company-wise-detail-report-filter/company-wise-detail-report-filter.component';


@Component({
  selector: 'app-company-wise-layout',
  templateUrl: './company-wise-layout.component.html',
  styleUrls: ['./company-wise-layout.component.scss']
})
export class CompanyWiseLayoutComponent implements OnInit {


  header = [
    {
      title: 'Company Name',
      key: 'companyName'
    },
    {
      title: 'Division/State',
      key: 'divisionState'
    },
    {
      title: 'District',
      key: 'district'
    },

    {
      title: 'Township',
      key: 'township'
    },

    {
      title: 'City/Town',
      key: 'cityTown'
    },

    {
      title: 'Agent Code',
      key: 'agentCode'
    },

    {
      title: 'Branch',
      key: 'branch'
    },

    {
      title: 'Reference Number',
      key: 'refNum'
    },

    {
      title: 'OK$ Account Number ',
      key: 'okAccNum'
    },
    {
      title: 'OK$ Account Type ',
      key: 'okAccType'
    },
    {
      title: 'Address',
      key: 'address'
    },
    {
      title: 'Postal Code',
      key: 'postalCode'
    },
    {
      title: 'Total Paid Amount ',
      key: 'totalPaidAmt'
    },
    {
      title: 'Total Generated Cash Back Amount ',
      key: 'totalGeneAmt'
    },
    {
      title: 'Transaction Date & Time ',
      key: 'transDateTime'
    },
    {
      title: 'Latitude ',
      key: 'latitude'
    },
    {
      title: 'Longitude ',
      key: 'longitude'
    },
    {
      title: 'Status ',
      key: 'status'
    },
   
  ];
  data = [
  {
    companyName: 'CGM',
    divisionState: 'Yangon',
    district: 'Eastern',
    township: 'Botahtaung',
    cityTown: 'Yangon',
    agentCode: 'OK$ 0000001',
    branch: 'Botahtaung Branch',
    refNum: '0000215835',
    okAccNum: '+95 0942018321',
    okAccType: 'Merchant',
    address: 'No (42), Botahtaung Tsp',
    postalCode: '11121',
    totalPaidAmt: '3,000,000',
    totalGeneAmt: '15,000',
    transDateTime: 'Fri,08-Jun-2021 12:10:20',
    latitude: '16.8991',
    longitude: '96.1992',
    status: 'Complete',
  },

  {
    companyName: 'CGM',
    divisionState: 'Yangon',
    district: 'Eastern',
    township: 'Botahtaung',
    cityTown: 'Yangon',
    agentCode: 'OK$ 0000001',
    branch: 'Botahtaung Branch',
    refNum: '0000215835',
    okAccNum: '+95 0942018321',
    okAccType: 'Merchant',
    address: 'No (42), Botahtaung Tsp',
    postalCode: '11121',
    totalPaidAmt: '3,000,000',
    totalGeneAmt: '15,000',
    transDateTime: 'Fri,08-Jun-2021 12:10:20',
    latitude: '16.8991',
    longitude: '96.1992',
    status: 'Complete',
  },

  {
    companyName: 'CGM',
    divisionState: 'Yangon',
    district: 'Eastern',
    township: 'Botahtaung',
    cityTown: 'Yangon',
    agentCode: 'OK$ 0000001',
    branch: 'Botahtaung Branch',
    refNum: '0000215835',
    okAccNum: '+95 0942018321',
    okAccType: 'Merchant',
    address: 'No (42), Botahtaung Tsp',
    postalCode: '11121',
    totalPaidAmt: '3,000,000',
    totalGeneAmt: '15,000',
    transDateTime: 'Fri,08-Jun-2021 12:10:20',
    latitude: '16.8991',
    longitude: '96.1992',
    status: 'Complete',
  },

  {
    companyName: 'CGM',
    divisionState: 'Yangon',
    district: 'Eastern',
    township: 'Botahtaung',
    cityTown: 'Yangon',
    agentCode: 'OK$ 0000001',
    branch: 'Botahtaung Branch',
    refNum: '0000215835',
    okAccNum: '+95 0942018321',
    okAccType: 'Merchant',
    address: 'No (42), Botahtaung Tsp',
    postalCode: '11121',
    totalPaidAmt: '3,000,000',
    totalGeneAmt: '15,000',
    transDateTime: 'Fri,08-Jun-2021 12:10:20',
    latitude: '16.8991',
    longitude: '96.1992',
    status: 'Complete',
  },

  {
    companyName: 'CGM',
    divisionState: 'Yangon',
    district: 'Eastern',
    township: 'Botahtaung',
    cityTown: 'Yangon',
    agentCode: 'OK$ 0000001',
    branch: 'Botahtaung Branch',
    refNum: '0000215835',
    okAccNum: '+95 0942018321',
    okAccType: 'Merchant',
    address: 'No (42), Botahtaung Tsp',
    postalCode: '11121',
    totalPaidAmt: '3,000,000',
    totalGeneAmt: '15,000',
    transDateTime: 'Fri,08-Jun-2021 12:10:20',
    latitude: '16.8991',
    longitude: '96.1992',
    status: 'Complete',
  },

  {
    companyName: 'CGM',
    divisionState: 'Yangon',
    district: 'Eastern',
    township: 'Botahtaung',
    cityTown: 'Yangon',
    agentCode: 'OK$ 0000001',
    branch: 'Botahtaung Branch',
    refNum: '0000215835',
    okAccNum: '+95 0942018321',
    okAccType: 'Merchant',
    address: 'No (42), Botahtaung Tsp',
    postalCode: '11121',
    totalPaidAmt: '3,000,000',
    totalGeneAmt: '15,000',
    transDateTime: 'Fri,08-Jun-2021 12:10:20',
    latitude: '16.8991',
    longitude: '96.1992',
    status: 'Complete',
  },

  {
    companyName: 'CGM',
    divisionState: 'Yangon',
    district: 'Eastern',
    township: 'Botahtaung',
    cityTown: 'Yangon',
    agentCode: 'OK$ 0000001',
    branch: 'Botahtaung Branch',
    refNum: '0000215835',
    okAccNum: '+95 0942018321',
    okAccType: 'Merchant',
    address: 'No (42), Botahtaung Tsp',
    postalCode: '11121',
    totalPaidAmt: '3,000,000',
    totalGeneAmt: '15,000',
    transDateTime: 'Fri,08-Jun-2021 12:10:20',
    latitude: '16.8991',
    longitude: '96.1992',
    status: 'Complete',
  },

  {
    companyName: 'CGM',
    divisionState: 'Yangon',
    district: 'Eastern',
    township: 'Botahtaung',
    cityTown: 'Yangon',
    agentCode: 'OK$ 0000001',
    branch: 'Botahtaung Branch',
    refNum: '0000215835',
    okAccNum: '+95 0942018321',
    okAccType: 'Merchant',
    address: 'No (42), Botahtaung Tsp',
    postalCode: '11121',
    totalPaidAmt: '3,000,000',
    totalGeneAmt: '15,000',
    transDateTime: 'Fri,08-Jun-2021 12:10:20',
    latitude: '16.8991',
    longitude: '96.1992',
    status: 'Complete',
  },

  {
    companyName: 'CGM',
    divisionState: 'Yangon',
    district: 'Eastern',
    township: 'Botahtaung',
    cityTown: 'Yangon',
    agentCode: 'OK$ 0000001',
    branch: 'Botahtaung Branch',
    refNum: '0000215835',
    okAccNum: '+95 0942018321',
    okAccType: 'Merchant',
    address: 'No (42), Botahtaung Tsp',
    postalCode: '11121',
    totalPaidAmt: '3,000,000',
    totalGeneAmt: '15,000',
    transDateTime: 'Fri,08-Jun-2021 12:10:20',
    latitude: '16.8991',
    longitude: '96.1992',
    status: 'Complete',
  },

  {
    companyName: 'CGM',
    divisionState: 'Yangon',
    district: 'Eastern',
    township: 'Botahtaung',
    cityTown: 'Yangon',
    agentCode: 'OK$ 0000001',
    branch: 'Botahtaung Branch',
    refNum: '0000215835',
    okAccNum: '+95 0942018321',
    okAccType: 'Merchant',
    address: 'No (42), Botahtaung Tsp',
    postalCode: '11121',
    totalPaidAmt: '3,000,000',
    totalGeneAmt: '15,000',
    transDateTime: 'Fri,08-Jun-2021 12:10:20',
    latitude: '16.8991',
    longitude: '96.1992',
    status: 'Complete',
  },

  {
    companyName: 'CGM',
    divisionState: 'Yangon',
    district: 'Eastern',
    township: 'Botahtaung',
    cityTown: 'Yangon',
    agentCode: 'OK$ 0000001',
    branch: 'Botahtaung Branch',
    refNum: '0000215835',
    okAccNum: '+95 0942018321',
    okAccType: 'Merchant',
    address: 'No (42), Botahtaung Tsp',
    postalCode: '11121',
    totalPaidAmt: '3,000,000',
    totalGeneAmt: '15,000',
    transDateTime: 'Fri,08-Jun-2021 12:10:20',
    latitude: '16.8991',
    longitude: '96.1992',
    status: 'Complete',
  },

  {
    companyName: 'CGM',
    divisionState: 'Yangon',
    district: 'Eastern',
    township: 'Botahtaung',
    cityTown: 'Yangon',
    agentCode: 'OK$ 0000001',
    branch: 'Botahtaung Branch',
    refNum: '0000215835',
    okAccNum: '+95 0942018321',
    okAccType: 'Merchant',
    address: 'No (42), Botahtaung Tsp',
    postalCode: '11121',
    totalPaidAmt: '3,000,000',
    totalGeneAmt: '15,000',
    transDateTime: 'Fri,08-Jun-2021 12:10:20',
    latitude: '16.8991',
    longitude: '96.1992',
    status: 'Complete',
  },

  {
    companyName: 'CGM',
    divisionState: 'Yangon',
    district: 'Eastern',
    township: 'Botahtaung',
    cityTown: 'Yangon',
    agentCode: 'OK$ 0000001',
    branch: 'Botahtaung Branch',
    refNum: '0000215835',
    okAccNum: '+95 0942018321',
    okAccType: 'Merchant',
    address: 'No (42), Botahtaung Tsp',
    postalCode: '11121',
    totalPaidAmt: '3,000,000',
    totalGeneAmt: '15,000',
    transDateTime: 'Fri,08-Jun-2021 12:10:20',
    latitude: '16.8991',
    longitude: '96.1992',
    status: 'Complete',
  },
  {
    companyName: 'CGM',
    divisionState: 'Yangon',
    district: 'Eastern',
    township: 'Botahtaung',
    cityTown: 'Yangon',
    agentCode: 'OK$ 0000001',
    branch: 'Botahtaung Branch',
    refNum: '0000215835',
    okAccNum: '+95 0942018321',
    okAccType: 'Merchant',
    address: 'No (42), Botahtaung Tsp',
    postalCode: '11121',
    totalPaidAmt: '3,000,000',
    totalGeneAmt: '15,000',
    transDateTime: 'Fri,08-Jun-2021 12:10:20',
    latitude: '16.8991',
    longitude: '96.1992',
    status: 'Complete',
  },


  {
    companyName: 'CGM',
    divisionState: 'Yangon',
    district: 'Eastern',
    township: 'Botahtaung',
    cityTown: 'Yangon',
    agentCode: 'OK$ 0000001',
    branch: 'Botahtaung Branch',
    refNum: '0000215835',
    okAccNum: '+95 0942018321',
    okAccType: 'Merchant',
    address: 'No (42), Botahtaung Tsp',
    postalCode: '11121',
    totalPaidAmt: '3,000,000',
    totalGeneAmt: '15,000',
    transDateTime: 'Fri,08-Jun-2021 12:10:20',
    latitude: '16.8991',
    longitude: '96.1992',
    status: 'Complete',
  },

  {
    companyName: 'CGM',
    divisionState: 'Yangon',
    district: 'Eastern',
    township: 'Botahtaung',
    cityTown: 'Yangon',
    agentCode: 'OK$ 0000001',
    branch: 'Botahtaung Branch',
    refNum: '0000215835',
    okAccNum: '+95 0942018321',
    okAccType: 'Merchant',
    address: 'No (42), Botahtaung Tsp',
    postalCode: '11121',
    totalPaidAmt: '3,000,000',
    totalGeneAmt: '15,000',
    transDateTime: 'Fri,08-Jun-2021 12:10:20',
    latitude: '16.8991',
    longitude: '96.1992',
    status: 'Complete',
  },
  {
    companyName: 'CGM',
    divisionState: 'Yangon',
    district: 'Eastern',
    township: 'Botahtaung',
    cityTown: 'Yangon',
    agentCode: 'OK$ 0000001',
    branch: 'Botahtaung Branch',
    refNum: '0000215835',
    okAccNum: '+95 0942018321',
    okAccType: 'Merchant',
    address: 'No (42), Botahtaung Tsp',
    postalCode: '11121',
    totalPaidAmt: '3,000,000',
    totalGeneAmt: '15,000',
    transDateTime: 'Fri,08-Jun-2021 12:10:20',
    latitude: '16.8991',
    longitude: '96.1992',
    status: 'Complete',
  },

  {
    companyName: 'CGM',
    divisionState: 'Yangon',
    district: 'Eastern',
    township: 'Botahtaung',
    cityTown: 'Yangon',
    agentCode: 'OK$ 0000001',
    branch: 'Botahtaung Branch',
    refNum: '0000215835',
    okAccNum: '+95 0942018321',
    okAccType: 'Merchant',
    address: 'No (42), Botahtaung Tsp',
    postalCode: '11121',
    totalPaidAmt: '3,000,000',
    totalGeneAmt: '15,000',
    transDateTime: 'Fri,08-Jun-2021 12:10:20',
    latitude: '16.8991',
    longitude: '96.1992',
    status: 'Complete',
  },

  {
    companyName: 'CGM',
    divisionState: 'Yangon',
    district: 'Eastern',
    township: 'Botahtaung',
    cityTown: 'Yangon',
    agentCode: 'OK$ 0000001',
    branch: 'Botahtaung Branch',
    refNum: '0000215835',
    okAccNum: '+95 0942018321',
    okAccType: 'Merchant',
    address: 'No (42), Botahtaung Tsp',
    postalCode: '11121',
    totalPaidAmt: '3,000,000',
    totalGeneAmt: '15,000',
    transDateTime: 'Fri,08-Jun-2021 12:10:20',
    latitude: '16.8991',
    longitude: '96.1992',
    status: 'Complete',
  },

  {
    companyName: 'CGM',
    divisionState: 'Yangon',
    district: 'Eastern',
    township: 'Botahtaung',
    cityTown: 'Yangon',
    agentCode: 'OK$ 0000001',
    branch: 'Botahtaung Branch',
    refNum: '0000215835',
    okAccNum: '+95 0942018321',
    okAccType: 'Merchant',
    address: 'No (42), Botahtaung Tsp',
    postalCode: '11121',
    totalPaidAmt: '3,000,000',
    totalGeneAmt: '15,000',
    transDateTime: 'Fri,08-Jun-2021 12:10:20',
    latitude: '16.8991',
    longitude: '96.1992',
    status: 'Complete',
  },
  
  ]
  actions = [
    {
      type: 'view',
      icon: 'assets/images/view_table.png'
    },
  ];

  file_header = [
    {
      title: 'Company Name',
      key: 'name'
    },
    {
      title: 'Division/State',
      key: 'account'
    },
    {
      title: 'District',
      key: 'type'
    },
    {
      title: 'Operator Name',
      key: 'operator'
    },
    {
      title: 'Township',
      key: 'name'
    },
    {
      title: 'City/Town',
      key: 'account'
    },
    {
      title: 'Agent Code ',
      key: 'type'
    },
    {
      title: 'Branch',
      key: 'operator'
    },
    {
      title: 'OK$ Account Number',
      key: 'name'
    },
    {
      title: 'Cash back Credit OK $ Account',
      key: 'account'
    },
    {
      title: ' Service Category Type ',
      key: 'type'
    },
    {
      title: 'OK$ Account Type',
      key: 'operator'
    },
    {
      title: 'Cash Back operator Wise',
      key: 'name'
    },
    {
      title: ' Cash Back Credit Telenor No. ',
      key: 'account'
    },
    {
      title: ' Cash Back Credit MPT No. ',
      key: 'type'
    },
    {
      title: 'Cash Back Credit Ooredoo Number',
      key: 'operator'
    },
    {
      title: ' Cash Back Credit Mytel Number',
      key: 'name'
    },
    {
      title: ' Cash Back Credit MecTel Number',
      key: 'account'
    },
    {
      title: 'Cash Back Credit Gift Cards Number ',
      key: 'type'
    },
    {
      title: 'Cash Back Credit DTH Number',
      key: 'operator'
    },
    {
      title: ' Cash Back Credit Electricity Number',
      key: 'name'
    },
    {
      title: 'Cash Back Credit Post Paid Number',
      key: 'account'
    },
    {
      title: 'Country',
      key: 'type'
    },
    {
      title: 'Cash Back Credit Over Seas Top Up Number',
      key: 'operator'
    },
    {
        title: 'Status',
        key: 'type'
    },
  ];
  file_data = [
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
  file_actions = [
    {
      type: 'view',
      icon: 'assets/images/view.png'
    },
    {
      type: 'edit',
      icon: 'assets/images/edit.png'
    },
    {
      type: 'delete',
      icon: 'assets/images/delete.png'
    }
  ];

  showFileTable: boolean = false;
  constructor( public dialog: MatDialog,private router: Router ) { }

  ngOnInit(): void {
  }

  fetchDataEvent(event: any){
  }

  fileFetchDataEvent(event: any){}

  filterTable(){
    const dialogRef = this.dialog.open(CompanyWiseDetailReportFilterComponent, {
      width: '850px',
      data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result){}
    });
  }

  actionEvent(event: any){
    if (event.type == "view") {
      this.router.navigate(['./admin/companyWiseCashBackDetailReport/view-company-wise-report-detail'])
    }
  }
}
