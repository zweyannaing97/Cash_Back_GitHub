import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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
      title: 'Division/State',
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
      width: '850px',
      data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result){}
    });
  }

  fetchDataEvent(event: any){

  }

  
  displayedColumns: string[] = ['refNum','companyName', 'divisionState', 'district', 'township', 'cityTown', 'agentCode', 'branch','confType', 'okAccNum', 'cashbackOkAcc', 'serviceCategory', 'okAccType', 'cashbackOpWise','cashbackTelenorNo','cashbackMptNo','cashbackOoredooNo','cashbackMytelNo','cashbackMectelNo','cashbackGiftCardsNo','cashbackDTHNo','cashbackElecNo','cashbackPostPaidNo','country','cashbackOvSeasNo','createDateTime','status'];
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
  confType: string;
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
  createDateTime: string;
  refNum: string;
  status: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', confType: 'Individual',okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',country:'Thailand',cashbackOvSeasNo:'097958654942',createDateTime: 'Fri,08-Jun-2021 12:10:20', refNum: '0000218932', status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', confType: 'Individual',okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',country:'Thailand',cashbackOvSeasNo:'097958654942',createDateTime: 'Fri,08-Jun-2021 12:10:20', refNum: '0000218932', status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', confType: 'Individual',okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',country:'Thailand',cashbackOvSeasNo:'097958654942',createDateTime: 'Fri,08-Jun-2021 12:10:20', refNum: '0000218932', status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', confType: 'Individual',okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',country:'Thailand',cashbackOvSeasNo:'097958654942',createDateTime: 'Fri,08-Jun-2021 12:10:20', refNum: '0000218932', status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', confType: 'Individual',okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',country:'Thailand',cashbackOvSeasNo:'097958654942',createDateTime: 'Fri,08-Jun-2021 12:10:20', refNum: '0000218932', status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', confType: 'Individual',okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',country:'Thailand',cashbackOvSeasNo:'097958654942',createDateTime: 'Fri,08-Jun-2021 12:10:20', refNum: '0000218932', status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', confType: 'Individual',okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',country:'Thailand',cashbackOvSeasNo:'097958654942',createDateTime: 'Fri,08-Jun-2021 12:10:20', refNum: '0000218932', status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', confType: 'Individual',okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',country:'Thailand',cashbackOvSeasNo:'097958654942',createDateTime: 'Fri,08-Jun-2021 12:10:20', refNum: '0000218932', status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', confType: 'Individual',okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',country:'Thailand',cashbackOvSeasNo:'097958654942',createDateTime: 'Fri,08-Jun-2021 12:10:20', refNum: '0000218932', status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', confType: 'Individual',okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',country:'Thailand',cashbackOvSeasNo:'097958654942',createDateTime: 'Fri,08-Jun-2021 12:10:20', refNum: '0000218932', status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', confType: 'Individual',okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',country:'Thailand',cashbackOvSeasNo:'097958654942',createDateTime: 'Fri,08-Jun-2021 12:10:20', refNum: '0000218932', status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', confType: 'Individual',okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',country:'Thailand',cashbackOvSeasNo:'097958654942',createDateTime: 'Fri,08-Jun-2021 12:10:20', refNum: '0000218932', status:'Complete'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', confType: 'Individual',okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',country:'Thailand',cashbackOvSeasNo:'097958654942',createDateTime: 'Fri,08-Jun-2021 12:10:20', refNum: '0000218932', status:'Complete'},



  
];
