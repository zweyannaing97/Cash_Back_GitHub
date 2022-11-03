import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-company-wise-report-detail',
  templateUrl: './view-company-wise-report-detail.component.html',
  styleUrls: ['./view-company-wise-report-detail.component.scss']
})
export class ViewCompanyWiseReportDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['companyName', 'divisionState', 'district', 'township','cityTown', 'agentCode','branch','refNo','okAccNo','okAccType','address','postalCode','totalPaidAmt','totalGeneAmt','transDateTime','latitude','longitude','status','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  displayedColumns2: string[] = ['refNum','companyName', 'divisionState', 'district','township','cityTown', 'agentCode', 'branch','okAccNum','okAccType','address','postalCode','totalPaidAmt','totalGeneAmt','cashbackOkAccNo','cashbackTelenorNo','telenorPaidAmt','telenorCashback','cashbackMPTNo','mptPaidAmt','mptCashback','cashbackOoredooNo','ooredooPaidAmt','ooredooCashback','cashbackMytelNo','mytelPaidAmt','mytelCashback','cashbackMectelNo','mectelPaidAmt','mectelCashback','cashbackGiftCardNo','giftcardPaidAmt','giftcardCashback','cashbackDTHNo','dthPaidAmt','dthCashback','cashbackElecNo','elecPaidAmt','elecCashback','cashbackOvseasNo','ovseasPaidAmt','ovseasCashback','sumTotalCashbackRecAmt','transactionDateTime','latitude','longitude','status'];
  dataSource2 = new MatTableDataSource<PeriodicElement2>(ELEMENT_DATA2);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource2.paginator = this.paginator;
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
  refNo: string;
  okAccNo: string;
  okAccType: string;
  address: string;
  postalCode: string;
  totalPaidAmt: string;
  totalGeneAmt: string;
  transDateTime: string;
  latitude: string;
  longitude: string;
  status: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { companyName:'CGM',divisionState:'Yangon',district:'Eastern',township:'Botahtaung',cityTown:'Yangon',agentCode:'OK$ 0000001',branch:'Botahtaung Branch',refNo:'00000215835',okAccNo:'+95 09420890790123',okAccType:'Merchant',address:'No (42), Botahtaung Tsp',postalCode:'11121',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',transDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991', longitude:'96.1992',status:'Complete',action:'assets/images/view_table.png'},
];

export interface PeriodicElement2 {
  companyName: string;
  divisionState: string;
  district: string;
  township: string;
  cityTown: string;
  agentCode: string;
  branch: string;
  refNum: string;
  okAccNum: string;
  okAccType: string;
  address: string;
  postalCode: string;
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

const ELEMENT_DATA2: PeriodicElement2[] = [
  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch',refNum:'00000213298', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'-',giftcardPaidAmt:'-',giftcardCashback:'-',cashbackDTHNo:'-',dthPaidAmt:'-',dthCashback:'-',cashbackElecNo:'-',elecPaidAmt:'-',elecCashback:'-',cashbackOvseasNo:'-',ovseasPaidAmt:'-',ovseasCashback:'-',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch',refNum:'00000213298', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'-',giftcardPaidAmt:'-',giftcardCashback:'-',cashbackDTHNo:'-',dthPaidAmt:'-',dthCashback:'-',cashbackElecNo:'-',elecPaidAmt:'-',elecCashback:'-',cashbackOvseasNo:'-',ovseasPaidAmt:'-',ovseasCashback:'-',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch',refNum:'00000213298', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'-',giftcardPaidAmt:'-',giftcardCashback:'-',cashbackDTHNo:'-',dthPaidAmt:'-',dthCashback:'-',cashbackElecNo:'-',elecPaidAmt:'-',elecCashback:'-',cashbackOvseasNo:'-',ovseasPaidAmt:'-',ovseasCashback:'-',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch',refNum:'00000213298', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'-',giftcardPaidAmt:'-',giftcardCashback:'-',cashbackDTHNo:'-',dthPaidAmt:'-',dthCashback:'-',cashbackElecNo:'-',elecPaidAmt:'-',elecCashback:'-',cashbackOvseasNo:'-',ovseasPaidAmt:'-',ovseasCashback:'-',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch',refNum:'00000213298', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'-',giftcardPaidAmt:'-',giftcardCashback:'-',cashbackDTHNo:'-',dthPaidAmt:'-',dthCashback:'-',cashbackElecNo:'-',elecPaidAmt:'-',elecCashback:'-',cashbackOvseasNo:'-',ovseasPaidAmt:'-',ovseasCashback:'-',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch',refNum:'00000213298', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'-',giftcardPaidAmt:'-',giftcardCashback:'-',cashbackDTHNo:'-',dthPaidAmt:'-',dthCashback:'-',cashbackElecNo:'-',elecPaidAmt:'-',elecCashback:'-',cashbackOvseasNo:'-',ovseasPaidAmt:'-',ovseasCashback:'-',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch',refNum:'00000213298', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'-',giftcardPaidAmt:'-',giftcardCashback:'-',cashbackDTHNo:'-',dthPaidAmt:'-',dthCashback:'-',cashbackElecNo:'-',elecPaidAmt:'-',elecCashback:'-',cashbackOvseasNo:'-',ovseasPaidAmt:'-',ovseasCashback:'-',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch',refNum:'00000213298', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'-',giftcardPaidAmt:'-',giftcardCashback:'-',cashbackDTHNo:'-',dthPaidAmt:'-',dthCashback:'-',cashbackElecNo:'-',elecPaidAmt:'-',elecCashback:'-',cashbackOvseasNo:'-',ovseasPaidAmt:'-',ovseasCashback:'-',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch',refNum:'00000213298', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'-',giftcardPaidAmt:'-',giftcardCashback:'-',cashbackDTHNo:'-',dthPaidAmt:'-',dthCashback:'-',cashbackElecNo:'-',elecPaidAmt:'-',elecCashback:'-',cashbackOvseasNo:'-',ovseasPaidAmt:'-',ovseasCashback:'-',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch',refNum:'00000213298', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'-',giftcardPaidAmt:'-',giftcardCashback:'-',cashbackDTHNo:'-',dthPaidAmt:'-',dthCashback:'-',cashbackElecNo:'-',elecPaidAmt:'-',elecCashback:'-',cashbackOvseasNo:'-',ovseasPaidAmt:'-',ovseasCashback:'-',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch',refNum:'00000213298', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'-',giftcardPaidAmt:'-',giftcardCashback:'-',cashbackDTHNo:'-',dthPaidAmt:'-',dthCashback:'-',cashbackElecNo:'-',elecPaidAmt:'-',elecCashback:'-',cashbackOvseasNo:'-',ovseasPaidAmt:'-',ovseasCashback:'-',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch',refNum:'00000213298', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'-',giftcardPaidAmt:'-',giftcardCashback:'-',cashbackDTHNo:'-',dthPaidAmt:'-',dthCashback:'-',cashbackElecNo:'-',elecPaidAmt:'-',elecCashback:'-',cashbackOvseasNo:'-',ovseasPaidAmt:'-',ovseasCashback:'-',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch',refNum:'00000213298', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'-',giftcardPaidAmt:'-',giftcardCashback:'-',cashbackDTHNo:'-',dthPaidAmt:'-',dthCashback:'-',cashbackElecNo:'-',elecPaidAmt:'-',elecCashback:'-',cashbackOvseasNo:'-',ovseasPaidAmt:'-',ovseasCashback:'-',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch',refNum:'00000213298', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'-',giftcardPaidAmt:'-',giftcardCashback:'-',cashbackDTHNo:'-',dthPaidAmt:'-',dthCashback:'-',cashbackElecNo:'-',elecPaidAmt:'-',elecCashback:'-',cashbackOvseasNo:'-',ovseasPaidAmt:'-',ovseasCashback:'-',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch',refNum:'00000213298', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'-',giftcardPaidAmt:'-',giftcardCashback:'-',cashbackDTHNo:'-',dthPaidAmt:'-',dthCashback:'-',cashbackElecNo:'-',elecPaidAmt:'-',elecCashback:'-',cashbackOvseasNo:'-',ovseasPaidAmt:'-',ovseasCashback:'-',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch',refNum:'00000213298', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'-',giftcardPaidAmt:'-',giftcardCashback:'-',cashbackDTHNo:'-',dthPaidAmt:'-',dthCashback:'-',cashbackElecNo:'-',elecPaidAmt:'-',elecCashback:'-',cashbackOvseasNo:'-',ovseasPaidAmt:'-',ovseasCashback:'-',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000001', branch: 'Botahtaung Branch',refNum:'00000213298', address:'No (42), Botahtaung Tsp', postalCode:'11121',okAccNum:'+95 09420183811',okAccType:'Merchant',totalPaidAmt:'3,000,000',totalGeneAmt:'15,000',cashbackOkAccNo:'+95 09420183811',cashbackTelenorNo:'+95 09799183811',telenorPaidAmt:'1,200,000',telenorCashback:'6,000',cashbackMPTNo:'+95 09420183811',mptPaidAmt:'800,000',mptCashback:'4,000',ooredooPaidAmt:'+95 09970183811',cashbackOoredooNo:'900,000',ooredooCashback:'4,200',cashbackMytelNo:'+95 09690183811',mytelPaidAmt:'2,000,000',mytelCashback:'10,000',cashbackMectelNo:'+95 09330183811',mectelPaidAmt:'300,000',mectelCashback:'1,500',cashbackGiftCardNo:'-',giftcardPaidAmt:'-',giftcardCashback:'-',cashbackDTHNo:'-',dthPaidAmt:'-',dthCashback:'-',cashbackElecNo:'-',elecPaidAmt:'-',elecCashback:'-',cashbackOvseasNo:'-',ovseasPaidAmt:'-',ovseasCashback:'-',sumTotalCashbackRecAmt:'15,000',transactionDateTime:'Fri,08-Jun-2021 12:10:20',latitude:'16.8991',longitude:'96.1992',status:'Complete'},

];