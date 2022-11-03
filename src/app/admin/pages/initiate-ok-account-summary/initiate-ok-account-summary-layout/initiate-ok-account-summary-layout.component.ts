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
    key: 'companyName'
    },
    {
    title: 'Division/State',
    key: 'divisionState'
    },
    {
    title: 'District',
    key: 'disctrict'
    },
    {
    title: 'Township',
    key: 'township'
    },
    {
      title: 'City Town',
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
      title: 'Address',
      key: 'address'
    },
    {
      title: 'Postal Code',
      key: 'postalCode'
    },
    {
      title: 'OK$ Account Number',
      key: 'okAccNum'
    },
    {
      title: 'OK$ Account Type',
      key: 'okAccType'
    },
    {
      title: 'Total Paid Amount',
      key: 'totalPaidAmt'
    },
    {
      title: 'Total Generated Cash Back Amount',
      key: 'totalGeneAmt'
    },
    {
      title: 'Transaction Date & Time',
      key: 'transactionDateTime'
    },
    
    ];
    data = [
    {
      companyName: 'CGM',
      divisionState: 'Yangon',
      disctrict: 'Eastern',
      township: 'Botahtaung',
      cityTown: 'Yangon',
      agentCode: 'OK$ 000000001',
      branch: 'Botahtaung Branch',
      address: 'No(42), Botahtaung Tsp',
      postalCode: '11121',
      okAccNum: '+95 09420879313',
      okAccType: 'Merchant',
      totalPaidAmt: '3,000,000',
      totalGeneAmt: '15,000',
      transactionDateTime: 'Fri,08-Jun-2021 12:10:20',
    },
    {
      companyName: 'CGM',
      divisionState: 'Yangon',
      disctrict: 'Eastern',
      township: 'Botahtaung',
      cityTown: 'Yangon',
      agentCode: 'OK$ 000000001',
      branch: 'Botahtaung Branch',
      address: 'No(42), Botahtaung Tsp',
      postalCode: '11121',
      okAccNum: '+95 09420879313',
      okAccType: 'Merchant',
      totalPaidAmt: '3,000,000',
      totalGeneAmt: '15,000',
      transactionDateTime: 'Fri,08-Jun-2021 12:10:20',
    },

    {
      companyName: 'CGM',
      divisionState: 'Yangon',
      disctrict: 'Eastern',
      township: 'Botahtaung',
      cityTown: 'Yangon',
      agentCode: 'OK$ 000000001',
      branch: 'Botahtaung Branch',
      address: 'No(42), Botahtaung Tsp',
      postalCode: '11121',
      okAccNum: '+95 09420879313',
      okAccType: 'Merchant',
      totalPaidAmt: '3,000,000',
      totalGeneAmt: '15,000',
      transactionDateTime: 'Fri,08-Jun-2021 12:10:20',
    },

    {
      companyName: 'CGM',
      divisionState: 'Yangon',
      disctrict: 'Eastern',
      township: 'Botahtaung',
      cityTown: 'Yangon',
      agentCode: 'OK$ 000000001',
      branch: 'Botahtaung Branch',
      address: 'No(42), Botahtaung Tsp',
      postalCode: '11121',
      okAccNum: '+95 09420879313',
      okAccType: 'Merchant',
      totalPaidAmt: '3,000,000',
      totalGeneAmt: '15,000',
      transactionDateTime: 'Fri,08-Jun-2021 12:10:20',
    },


    {
      companyName: 'CGM',
      divisionState: 'Yangon',
      disctrict: 'Eastern',
      township: 'Botahtaung',
      cityTown: 'Yangon',
      agentCode: 'OK$ 000000001',
      branch: 'Botahtaung Branch',
      address: 'No(42), Botahtaung Tsp',
      postalCode: '11121',
      okAccNum: '+95 09420879313',
      okAccType: 'Merchant',
      totalPaidAmt: '3,000,000',
      totalGeneAmt: '15,000',
      transactionDateTime: 'Fri,08-Jun-2021 12:10:20',
    },

    {
      companyName: 'CGM',
      divisionState: 'Yangon',
      disctrict: 'Eastern',
      township: 'Botahtaung',
      cityTown: 'Yangon',
      agentCode: 'OK$ 000000001',
      branch: 'Botahtaung Branch',
      address: 'No(42), Botahtaung Tsp',
      postalCode: '11121',
      okAccNum: '+95 09420879313',
      okAccType: 'Merchant',
      totalPaidAmt: '3,000,000',
      totalGeneAmt: '15,000',
      transactionDateTime: 'Fri,08-Jun-2021 12:10:20',
    },


    {
      companyName: 'CGM',
      divisionState: 'Yangon',
      disctrict: 'Eastern',
      township: 'Botahtaung',
      cityTown: 'Yangon',
      agentCode: 'OK$ 000000001',
      branch: 'Botahtaung Branch',
      address: 'No(42), Botahtaung Tsp',
      postalCode: '11121',
      okAccNum: '+95 09420879313',
      okAccType: 'Merchant',
      totalPaidAmt: '3,000,000',
      totalGeneAmt: '15,000',
      transactionDateTime: 'Fri,08-Jun-2021 12:10:20',
    },

    {
      companyName: 'CGM',
      divisionState: 'Yangon',
      disctrict: 'Eastern',
      township: 'Botahtaung',
      cityTown: 'Yangon',
      agentCode: 'OK$ 000000001',
      branch: 'Botahtaung Branch',
      address: 'No(42), Botahtaung Tsp',
      postalCode: '11121',
      okAccNum: '+95 09420879313',
      okAccType: 'Merchant',
      totalPaidAmt: '3,000,000',
      totalGeneAmt: '15,000',
      transactionDateTime: 'Fri,08-Jun-2021 12:10:20',
    },

    {
      companyName: 'CGM',
      divisionState: 'Yangon',
      disctrict: 'Eastern',
      township: 'Botahtaung',
      cityTown: 'Yangon',
      agentCode: 'OK$ 000000001',
      branch: 'Botahtaung Branch',
      address: 'No(42), Botahtaung Tsp',
      postalCode: '11121',
      okAccNum: '+95 09420879313',
      okAccType: 'Merchant',
      totalPaidAmt: '3,000,000',
      totalGeneAmt: '15,000',
      transactionDateTime: 'Fri,08-Jun-2021 12:10:20',
    },

    {
      companyName: 'CGM',
      divisionState: 'Yangon',
      disctrict: 'Eastern',
      township: 'Botahtaung',
      cityTown: 'Yangon',
      agentCode: 'OK$ 000000001',
      branch: 'Botahtaung Branch',
      address: 'No(42), Botahtaung Tsp',
      postalCode: '11121',
      okAccNum: '+95 09420879313',
      okAccType: 'Merchant',
      totalPaidAmt: '3,000,000',
      totalGeneAmt: '15,000',
      transactionDateTime: 'Fri,08-Jun-2021 12:10:20',
    },

    {
      companyName: 'CGM',
      divisionState: 'Yangon',
      disctrict: 'Eastern',
      township: 'Botahtaung',
      cityTown: 'Yangon',
      agentCode: 'OK$ 000000001',
      branch: 'Botahtaung Branch',
      address: 'No(42), Botahtaung Tsp',
      postalCode: '11121',
      okAccNum: '+95 09420879313',
      okAccType: 'Merchant',
      totalPaidAmt: '3,000,000',
      totalGeneAmt: '15,000',
      transactionDateTime: 'Fri,08-Jun-2021 12:10:20',
    },

    {
      companyName: 'CGM',
      divisionState: 'Yangon',
      disctrict: 'Eastern',
      township: 'Botahtaung',
      cityTown: 'Yangon',
      agentCode: 'OK$ 000000001',
      branch: 'Botahtaung Branch',
      address: 'No(42), Botahtaung Tsp',
      postalCode: '11121',
      okAccNum: '+95 09420879313',
      okAccType: 'Merchant',
      totalPaidAmt: '3,000,000',
      totalGeneAmt: '15,000',
      transactionDateTime: 'Fri,08-Jun-2021 12:10:20',
    },

    {
      companyName: 'CGM',
      divisionState: 'Yangon',
      disctrict: 'Eastern',
      township: 'Botahtaung',
      cityTown: 'Yangon',
      agentCode: 'OK$ 000000001',
      branch: 'Botahtaung Branch',
      address: 'No(42), Botahtaung Tsp',
      postalCode: '11121',
      okAccNum: '+95 09420879313',
      okAccType: 'Merchant',
      totalPaidAmt: '3,000,000',
      totalGeneAmt: '15,000',
      transactionDateTime: 'Fri,08-Jun-2021 12:10:20',
    },

    {
      companyName: 'CGM',
      divisionState: 'Yangon',
      disctrict: 'Eastern',
      township: 'Botahtaung',
      cityTown: 'Yangon',
      agentCode: 'OK$ 000000001',
      branch: 'Botahtaung Branch',
      address: 'No(42), Botahtaung Tsp',
      postalCode: '11121',
      okAccNum: '+95 09420879313',
      okAccType: 'Merchant',
      totalPaidAmt: '3,000,000',
      totalGeneAmt: '15,000',
      transactionDateTime: 'Fri,08-Jun-2021 12:10:20',
    },

    {
      companyName: 'CGM',
      divisionState: 'Yangon',
      disctrict: 'Eastern',
      township: 'Botahtaung',
      cityTown: 'Yangon',
      agentCode: 'OK$ 000000001',
      branch: 'Botahtaung Branch',
      address: 'No(42), Botahtaung Tsp',
      postalCode: '11121',
      okAccNum: '+95 09420879313',
      okAccType: 'Merchant',
      totalPaidAmt: '3,000,000',
      totalGeneAmt: '15,000',
      transactionDateTime: 'Fri,08-Jun-2021 12:10:20',
    },

    {
      companyName: 'CGM',
      divisionState: 'Yangon',
      disctrict: 'Eastern',
      township: 'Botahtaung',
      cityTown: 'Yangon',
      agentCode: 'OK$ 000000001',
      branch: 'Botahtaung Branch',
      address: 'No(42), Botahtaung Tsp',
      postalCode: '11121',
      okAccNum: '+95 09420879313',
      okAccType: 'Merchant',
      totalPaidAmt: '3,000,000',
      totalGeneAmt: '15,000',
      transactionDateTime: 'Fri,08-Jun-2021 12:10:20',
    },

    {
      companyName: 'CGM',
      divisionState: 'Yangon',
      disctrict: 'Eastern',
      township: 'Botahtaung',
      cityTown: 'Yangon',
      agentCode: 'OK$ 000000001',
      branch: 'Botahtaung Branch',
      address: 'No(42), Botahtaung Tsp',
      postalCode: '11121',
      okAccNum: '+95 09420879313',
      okAccType: 'Merchant',
      totalPaidAmt: '3,000,000',
      totalGeneAmt: '15,000',
      transactionDateTime: 'Fri,08-Jun-2021 12:10:20',
    },

    {
      companyName: 'CGM',
      divisionState: 'Yangon',
      disctrict: 'Eastern',
      township: 'Botahtaung',
      cityTown: 'Yangon',
      agentCode: 'OK$ 000000001',
      branch: 'Botahtaung Branch',
      address: 'No(42), Botahtaung Tsp',
      postalCode: '11121',
      okAccNum: '+95 09420879313',
      okAccType: 'Merchant',
      totalPaidAmt: '3,000,000',
      totalGeneAmt: '15,000',
      transactionDateTime: 'Fri,08-Jun-2021 12:10:20',
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
      width: '850px',
      data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result){}
    });
  }
}
