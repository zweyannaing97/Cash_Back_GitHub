import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { InitiateOkAccountDetailFilterComponent } from 'src/app/admin/modals/initiate-ok-account-detail-filter/initiate-ok-account-detail-filter.component';

@Component({
  selector: 'app-initiate-ok-account-detail-layout',
  templateUrl: './initiate-ok-account-detail-layout.component.html',
  styleUrls: ['./initiate-ok-account-detail-layout.component.scss']
})
export class InitiateOkAccountDetailLayoutComponent implements OnInit {

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
    branchs = [
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
    const dialogRef = this.dialog.open(InitiateOkAccountDetailFilterComponent, {
      width: '50vw',
      data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result){}
    });
  }

  
  displayedColumns: string[] = ['companyName', 'divisionState', 'district','township','cityTown', 'agentCode', 'branch','address','postalCode','okAccNum','okAccType','totalPaidAmt','totalGeneAmt','cashbackOkAccNo','cashbackTelenorNo','telenorPaidAmt','telenorCashback','cashbackMPTNo','mptPaidAmt','mptCashback','cashbackOoredooNo','ooredooPaidAmt','ooredooCashback','cashbackMytelNo','mytelPaidAmt','mytelCashback','cashbackMectelNo','mectelPaidAmt','mectelCashback','cashbackGiftCardNo','giftcardPaidAmt','giftcardCashback','cashbackDTHNo','dthPaidAmt','dthCashback','cashbackElecNo','elecPaidAmt','elecCashback','cashbackOvseasNo','ovseasPaidAmt','ovseasCashback','sumTotalCashbackRecAmt','transactionDateTime','latitude','longitude','status'];
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
  address: string;
  postalCode: string;
  okAccNum: string;
  okAccType: string;
  totalPaidAmt: string;
  totalGeneAmt: string;
  cashbackOkAccNo: string;
  cashbackTelenorNo: string;
  telenorPaidAmt: string;
  telenorCashback: string;
  cashbackMPTNo: string;
  mptPaidAmt: string;
  mptCashback: string;
  cashbackOoredooNo: string;
  ooredooPaidAmt: string;
  ooredooCashback: string;
  cashbackMytelNo: string;
  mytelPaidAmt: string;
  mytelCashback: string;
  cashbackMectelNo: string;
  mectelPaidAmt: string;
  mectelCashback: string;
  cashbackGiftCardNo: string;
  giftcardPaidAmt: string;
  giftcardCashback: string;
  cashbackDTHNo: string;
  dthPaidAmt: string;
  dthCashback: string;
  cashbackElecNo: string;
  elecPaidAmt: string;
  elecCashback: string;
  cashbackOvseasNo: string;
  ovseasPaidAmt: string;
  ovseasCashback: string;
  sumTotalCashbackRecAmt: string;
  transactionDateTime: string;
  latitude: string;
  longitude: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'',giftcardPaidAmt:'',giftcardCashback:'',cashbackDTHNo:'',dthPaidAmt:'',dthCashback:'',cashbackElecNo:'',elecPaidAmt:'',elecCashback:'',cashbackOvseasNo:'',ovseasPaidAmt:'',ovseasCashback:'',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'',giftcardPaidAmt:'',giftcardCashback:'',cashbackDTHNo:'',dthPaidAmt:'',dthCashback:'',cashbackElecNo:'',elecPaidAmt:'',elecCashback:'',cashbackOvseasNo:'',ovseasPaidAmt:'',ovseasCashback:'',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},


  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'',giftcardPaidAmt:'',giftcardCashback:'',cashbackDTHNo:'',dthPaidAmt:'',dthCashback:'',cashbackElecNo:'',elecPaidAmt:'',elecCashback:'',cashbackOvseasNo:'',ovseasPaidAmt:'',ovseasCashback:'',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'',giftcardPaidAmt:'',giftcardCashback:'',cashbackDTHNo:'',dthPaidAmt:'',dthCashback:'',cashbackElecNo:'',elecPaidAmt:'',elecCashback:'',cashbackOvseasNo:'',ovseasPaidAmt:'',ovseasCashback:'',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'',giftcardPaidAmt:'',giftcardCashback:'',cashbackDTHNo:'',dthPaidAmt:'',dthCashback:'',cashbackElecNo:'',elecPaidAmt:'',elecCashback:'',cashbackOvseasNo:'',ovseasPaidAmt:'',ovseasCashback:'',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'',giftcardPaidAmt:'',giftcardCashback:'',cashbackDTHNo:'',dthPaidAmt:'',dthCashback:'',cashbackElecNo:'',elecPaidAmt:'',elecCashback:'',cashbackOvseasNo:'',ovseasPaidAmt:'',ovseasCashback:'',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'',giftcardPaidAmt:'',giftcardCashback:'',cashbackDTHNo:'',dthPaidAmt:'',dthCashback:'',cashbackElecNo:'',elecPaidAmt:'',elecCashback:'',cashbackOvseasNo:'',ovseasPaidAmt:'',ovseasCashback:'',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'',giftcardPaidAmt:'',giftcardCashback:'',cashbackDTHNo:'',dthPaidAmt:'',dthCashback:'',cashbackElecNo:'',elecPaidAmt:'',elecCashback:'',cashbackOvseasNo:'',ovseasPaidAmt:'',ovseasCashback:'',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'',giftcardPaidAmt:'',giftcardCashback:'',cashbackDTHNo:'',dthPaidAmt:'',dthCashback:'',cashbackElecNo:'',elecPaidAmt:'',elecCashback:'',cashbackOvseasNo:'',ovseasPaidAmt:'',ovseasCashback:'',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'',giftcardPaidAmt:'',giftcardCashback:'',cashbackDTHNo:'',dthPaidAmt:'',dthCashback:'',cashbackElecNo:'',elecPaidAmt:'',elecCashback:'',cashbackOvseasNo:'',ovseasPaidAmt:'',ovseasCashback:'',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'',giftcardPaidAmt:'',giftcardCashback:'',cashbackDTHNo:'',dthPaidAmt:'',dthCashback:'',cashbackElecNo:'',elecPaidAmt:'',elecCashback:'',cashbackOvseasNo:'',ovseasPaidAmt:'',ovseasCashback:'',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'',giftcardPaidAmt:'',giftcardCashback:'',cashbackDTHNo:'',dthPaidAmt:'',dthCashback:'',cashbackElecNo:'',elecPaidAmt:'',elecCashback:'',cashbackOvseasNo:'',ovseasPaidAmt:'',ovseasCashback:'',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'',giftcardPaidAmt:'',giftcardCashback:'',cashbackDTHNo:'',dthPaidAmt:'',dthCashback:'',cashbackElecNo:'',elecPaidAmt:'',elecCashback:'',cashbackOvseasNo:'',ovseasPaidAmt:'',ovseasCashback:'',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},
  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'',giftcardPaidAmt:'',giftcardCashback:'',cashbackDTHNo:'',dthPaidAmt:'',dthCashback:'',cashbackElecNo:'',elecPaidAmt:'',elecCashback:'',cashbackOvseasNo:'',ovseasPaidAmt:'',ovseasCashback:'',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'',giftcardPaidAmt:'',giftcardCashback:'',cashbackDTHNo:'',dthPaidAmt:'',dthCashback:'',cashbackElecNo:'',elecPaidAmt:'',elecCashback:'',cashbackOvseasNo:'',ovseasPaidAmt:'',ovseasCashback:'',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},
  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'',giftcardPaidAmt:'',giftcardCashback:'',cashbackDTHNo:'',dthPaidAmt:'',dthCashback:'',cashbackElecNo:'',elecPaidAmt:'',elecCashback:'',cashbackOvseasNo:'',ovseasPaidAmt:'',ovseasCashback:'',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'',giftcardPaidAmt:'',giftcardCashback:'',cashbackDTHNo:'',dthPaidAmt:'',dthCashback:'',cashbackElecNo:'',elecPaidAmt:'',elecCashback:'',cashbackOvseasNo:'',ovseasPaidAmt:'',ovseasCashback:'',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'',giftcardPaidAmt:'',giftcardCashback:'',cashbackDTHNo:'',dthPaidAmt:'',dthCashback:'',cashbackElecNo:'',elecPaidAmt:'',elecCashback:'',cashbackOvseasNo:'',ovseasPaidAmt:'',ovseasCashback:'',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'',giftcardPaidAmt:'',giftcardCashback:'',cashbackDTHNo:'',dthPaidAmt:'',dthCashback:'',cashbackElecNo:'',elecPaidAmt:'',elecCashback:'',cashbackOvseasNo:'',ovseasPaidAmt:'',ovseasCashback:'',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},


];