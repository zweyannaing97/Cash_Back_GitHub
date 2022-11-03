import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-bulk-cashback-configuration-report',
  templateUrl: './view-bulk-cashback-configuration-report.component.html',
  styleUrls: ['./view-bulk-cashback-configuration-report.component.scss']
})
export class ViewBulkCashbackConfigurationReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['fileName', 'refNo', 'confType', 'createdDateTime', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  displayedColumns2: string[] = ['fileName','refNum','companyName', 'divisionState', 'district', 'township', 'cityTown', 'agentCode', 'branch', 'okAccNum', 'cashbackOkAcc', 'serviceCategory', 'okAccType', 'cashbackOpWise','cashbackTelenorNo','cashbackMptNo','cashbackOoredooNo','cashbackMytelNo','cashbackMectelNo','cashbackGiftCardsNo','cashbackDTHNo','cashbackElecNo','cashbackPostPaidNo','cashbackOvSeasNo','createdDateTime','status'];
  dataSource2 = new MatTableDataSource<PeriodicElement2>(ELEMENT_DATA2);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource2.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  fileName: string;
  refNo: string;
  confType: string;
  createdDateTime: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {fileName: 'File Name 1', refNo: '000219834', confType: 'Bulk', createdDateTime: 'Fri,08-Jun-2021 12:10:20', action: 'assets/images/view_table.png'},
];

export interface PeriodicElement2 {
  fileName: string;
  refNum: string;
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
  cashbackOvSeasNo: string;
  createdDateTime: string;
  status: string;
}

const ELEMENT_DATA2: PeriodicElement2[] = [
  {fileName:'File Name 1', refNum: '00000218593', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',cashbackOvSeasNo:'097958654942',createdDateTime: 'Fri,08-Jun-2021 12:10:20', status:'Complete'},

  {fileName:'File Name 1', refNum: '00000218593', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',cashbackOvSeasNo:'097958654942',createdDateTime: 'Fri,08-Jun-2021 12:10:20', status:'Complete'},

  {fileName:'File Name 1', refNum: '00000218593', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',cashbackOvSeasNo:'097958654942',createdDateTime: 'Fri,08-Jun-2021 12:10:20', status:'Complete'},

  {fileName:'File Name 1', refNum: '00000218593', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',cashbackOvSeasNo:'097958654942',createdDateTime: 'Fri,08-Jun-2021 12:10:20', status:'Complete'},

  {fileName:'File Name 1', refNum: '00000218593', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',cashbackOvSeasNo:'097958654942',createdDateTime: 'Fri,08-Jun-2021 12:10:20', status:'Complete'},

  {fileName:'File Name 1', refNum: '00000218593', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',cashbackOvSeasNo:'097958654942',createdDateTime: 'Fri,08-Jun-2021 12:10:20', status:'Complete'},

  {fileName:'File Name 1', refNum: '00000218593', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',cashbackOvSeasNo:'097958654942',createdDateTime: 'Fri,08-Jun-2021 12:10:20', status:'Complete'},

  {fileName:'File Name 1', refNum: '00000218593', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',cashbackOvSeasNo:'097958654942',createdDateTime: 'Fri,08-Jun-2021 12:10:20', status:'Complete'},

  {fileName:'File Name 1', refNum: '00000218593', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',cashbackOvSeasNo:'097958654942',createdDateTime: 'Fri,08-Jun-2021 12:10:20', status:'Complete'},

  {fileName:'File Name 1', refNum: '00000218593', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',cashbackOvSeasNo:'097958654942',createdDateTime: 'Fri,08-Jun-2021 12:10:20', status:'Complete'},

  {fileName:'File Name 1', refNum: '00000218593', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',cashbackOvSeasNo:'097958654942',createdDateTime: 'Fri,08-Jun-2021 12:10:20', status:'Complete'},
];