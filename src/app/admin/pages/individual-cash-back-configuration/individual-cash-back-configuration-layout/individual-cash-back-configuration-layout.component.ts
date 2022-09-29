import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IndividualCashbackConfigListingFilterComponent } from 'src/app/admin/modals/individual-cashback-config-listing-filter/individual-cashback-config-listing-filter.component';
import { categoryItems } from 'src/app/utils/constants';
export interface TableData {
  township: string;
  division: string;
  city: string;
  branch: string;
}

const ELEMENT_DATA: TableData[] = [
  {division: 'Yangon Division', township: 'Ahlone', city: 'Dala', branch: 'Kwin Yaoung Street(Ahlone)'},
];

@Component({
  selector: 'app-individual-cash-back-configuration-layout',
  templateUrl: './individual-cash-back-configuration-layout.component.html',
  styleUrls: ['./individual-cash-back-configuration-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IndividualCashBackConfigurationLayoutComponent implements OnInit {

  header = [
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
  ];

  categoryItems: any = categoryItems;
  selectedCategory: any;
  individual_listing: boolean = false;
  showButtons:boolean = true;
  account_number: string = '';
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  fileName!:string;
  convertedJson! : string


  displayedColumns: string[] = ['division', 'township', 'city', 'branch'];
  displayedColumnss: string[] = ['name', 'division', 'district', 'township', 'city', 'agent_code', 'branch', 'account_number', 'cashBackCreditAccount', 'serviceCtegoryType', 'accountType', 'operatorWise', 'telenorNumber','mptNumber', 'ooredooNumber', 'mytelNumber', 'mectelNumber', 'giftCardsNumber', 'dthNumber', 'electricityNumber', 'postPaidNumber', 'country', 'overSeasTopUp', 'status'];

  dataSource = ELEMENT_DATA;

  fetchDataEvent(event: any){}


  categoryMenuClick(category_name: any){
    this.showButtons = false;
    this.selectedCategory = category_name;
  }


  formValidation(event: boolean){
    this.showButtons = event;
  }

  filterTable(){
    const dialogRef = this.dialog.open(IndividualCashbackConfigListingFilterComponent, {
      width: '850px',
      data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result){}
    });
  }

  addData(){
    this.individual_listing = false;
  }
}
