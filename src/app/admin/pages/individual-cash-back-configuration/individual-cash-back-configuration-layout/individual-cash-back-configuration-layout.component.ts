import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IndividualCashbackConfigListingFilterComponent } from 'src/app/admin/modals/individual-cashback-config-listing-filter/individual-cashback-config-listing-filter.component';
import { categoryItems } from 'src/app/utils/constants';
export interface TableData {
  township: string;
  division: string;
  city: string;
  branch: string;
}
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
      key: 'agentCode'
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
      key: 'agentCode'
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
      title: ' Service Category agentCode ',
      key: 'agentCode'
    },
    {
      title: 'OK$ Account agentCode',
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
      key: 'agentCode'
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
      key: 'agentCode'
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
      key: 'agentCode'
    },
    {
      title: 'Cash Back Credit Over Seas Top Up Number',
      key: 'operator'
    },
    {
      title: 'Status',
      key: 'agentCode'
    },

  ];
  data = [
  {
    name: 'CGM',
    account: '765745454',
    agentCode: 'Merchant',
    operator: 'MPT'
  },
  {
    name: 'OK $',
    account: '7657454454454',
    agentCode: 'Personal',
    operator: 'Telenor'
  },
  {
    name: 'GAT',
    account: '765745454656',
    agentCode: 'Advance Merchant',
    operator: 'MPT'
  },
  {
    name: 'One Stop Supermarket',
    account: '765745435454',
    agentCode: 'Merchant',
    operator: 'MPT'
  },
  {
    name: 'OK $ Taxi',
    account: '765435745454',
    agentCode: 'Merchant',
    operator: 'Telenor'
  },
  {
    name: 'CGM',
    account: '765745454',
    agentCode: 'Merchant',
    operator: 'MPT'
  },
  {
    name: 'OK $',
    account: '7657454454454',
    agentCode: 'Personal',
    operator: 'Telenor'
  },
  {
    name: 'GAT',
    account: '765745454656',
    agentCode: 'Advance Merchant',
    operator: 'MPT'
  },
  {
    name: 'One Stop Supermarket',
    account: '765745435454',
    agentCode: 'Merchant',
    operator: 'MPT'
  },
  {
    name: 'OK $ Taxi',
    account: '765435745454',
    agentCode: 'Merchant',
    operator: 'Telenor'
  },
  {
    name: 'GAT',
    account: '765745454656',
    agentCode: 'Advance Merchant',
    operator: 'MPT'
  },
  {
    name: 'One Stop Supermarket',
    account: '765745435454',
    agentCode: 'Merchant',
    operator: 'MPT'
  },
  {
    name: 'OK $ Taxi',
    account: '765435745454',
    agentCode: 'Merchant',
    operator: 'Telenor'
  },
  {
    name: 'OK $',
    account: '7657454454454',
    agentCode: 'Personal',
    operator: 'Telenor'
  },
  {
    name: 'GAT',
    account: '765745454656',
    agentCode: 'Advance Merchant',
    operator: 'MPT'
  },
  {
    name: 'One Stop Supermarket',
    account: '765745435454',
    agentCode: 'Merchant',
    operator: 'MPT'
  },
  {
    name: 'OK $ Taxi',
    account: '765435745454',
    agentCode: 'Merchant',
    operator: 'Telenor'
  },
  ];

  categoryItems: any = categoryItems;
  selectedCategory: any;
  individual_listing: boolean = true;
  showButtons:boolean = true;
  account_number: string = '';
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  fileName!:string;
  convertedJson! : string


  categoryMenuClick(category_name: any){
    this.showButtons = false;
    this.selectedCategory = category_name;
    if (category_name === 'Close'){
      this.showButtons = true;
    }
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

  displayedColumns: string[] = ['companyName', 'divisionState', 'district', 'township', 'cityTown', 'agentCode', 'branch', 'okAccNum', 'cashbackOkAcc', 'serviceCategory', 'okAccType', 'cashbackOpWise','cashbackTelenorNo','cashbackMptNo','cashbackOoredooNo','cashbackMytelNo','cashbackMectelNo','cashbackGiftCardsNo','cashbackDTHNo','cashbackElecNo','cashbackPostPaidNo','country','cashbackOvSeasNo','status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


export interface PeriodicElement {
  companyName: string;
  divisionState: string;
  district: string;
  township: string;
  cityTown: string;
  agentCode: string;
  branch: string;
  okAccNum: string;
  cashbackOkAcc: string;
  serviceCategory: string;
  okAccType: string;
  cashbackOpWise: string;
  cashbackTelenorNo: string;
  cashbackMptNo: string;
  cashbackOoredooNo: string;
  cashbackMytelNo: string;
  cashbackMectelNo: string;
  cashbackGiftCardsNo: string;
  cashbackDTHNo: string;
  cashbackElecNo: string;
  cashbackPostPaidNo: string;
  country: string;
  cashbackOvSeasNo: string;
  status: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
  {companyName: 'assets/images/profile.png', divisionState: 'Aye Aye', district: 'Account Department', township: 'Accoutant', cityTown: '+95 09421056929', agentCode:'Admin', branch:'2', okAccNum:'5', cashbackOkAcc:'Aye Aye', serviceCategory:'Yes', okAccType:'Mon, 08-Jan-2021 09:10:20',cashbackOpWise:'All', cashbackTelenorNo:'097958654942',cashbackMptNo:'097958654942',cashbackOoredooNo:'097958654942', cashbackMytelNo:'097958654942',cashbackMectelNo:'097958654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',country:'097958654942',cashbackOvSeasNo:'097958654942',status:'097958654942'},


];