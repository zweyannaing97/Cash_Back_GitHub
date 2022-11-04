import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IndividualCashbackConfigListingFilterComponent } from 'src/app/admin/modals/individual-cashback-config-listing-filter/individual-cashback-config-listing-filter.component';

@Component({
  selector: 'app-individual-cash-back-configuration-listing',
  templateUrl: './individual-cash-back-configuration-listing.component.html',
  styleUrls: ['./individual-cash-back-configuration-listing.component.scss']
})
export class IndividualCashBackConfigurationListingComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }


  ngOnInit(): void {
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


  displayedColumns: string[] = ['refNum','companyName', 'divisionState', 'district', 'township', 'cityTown', 'agentCode', 'branch', 'okAccNum', 'cashbackOkAcc', 'serviceCategory', 'okAccType', 'cashbackOpWise','cashbackTelenorNo','cashbackMptNo','cashbackOoredooNo','cashbackMytelNo','cashbackMectelNo','cashbackGiftCardsNo','cashbackDTHNo','cashbackElecNo','cashbackPostPaidNo','country','cashbackOvSeasNo','createDateTime','status'];
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
  createDateTime: string;
  status: string;
  refNum: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',country:'Thailand',cashbackOvSeasNo:'097958654942',createDateTime: 'Fri, 08-Jun-2021 12:10:20',status:'Complete',refNum: '00002312331'},
  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',country:'Thailand',cashbackOvSeasNo:'097958654942',createDateTime: 'Fri, 08-Jun-2021 12:10:20',status:'Complete',refNum: '00002312331'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',country:'Thailand',cashbackOvSeasNo:'097958654942',createDateTime: 'Fri, 08-Jun-2021 12:10:20',status:'Complete',refNum: '00002312331'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',country:'Thailand',cashbackOvSeasNo:'097958654942',createDateTime: 'Fri, 08-Jun-2021 12:10:20',status:'Complete',refNum: '00002312331'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',country:'Thailand',cashbackOvSeasNo:'097958654942',createDateTime: 'Fri, 08-Jun-2021 12:10:20',status:'Complete',refNum: '00002312331'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',country:'Thailand',cashbackOvSeasNo:'097958654942',createDateTime: 'Fri, 08-Jun-2021 12:10:20',status:'Complete',refNum: '00002312331'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',country:'Thailand',cashbackOvSeasNo:'097958654942',createDateTime: 'Fri, 08-Jun-2021 12:10:20',status:'Complete',refNum: '00002312331'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',country:'Thailand',cashbackOvSeasNo:'097958654942',createDateTime: 'Fri, 08-Jun-2021 12:10:20',status:'Complete',refNum: '00002312331'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',country:'Thailand',cashbackOvSeasNo:'097958654942',createDateTime: 'Fri, 08-Jun-2021 12:10:20',status:'Complete',refNum: '00002312331'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',country:'Thailand',cashbackOvSeasNo:'097958654942',createDateTime: 'Fri, 08-Jun-2021 12:10:20',status:'Complete',refNum: '00002312331'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',country:'Thailand',cashbackOvSeasNo:'097958654942',createDateTime: 'Fri, 08-Jun-2021 12:10:20',status:'Complete',refNum: '00002312331'},

  {companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode:'OK$ 0000001', branch:'Botahtaung Branch', okAccNum:'+95 09421801925', cashbackOkAcc:'+95 09421801925', serviceCategory:'All', okAccType:'Merchant',cashbackOpWise:'All', cashbackTelenorNo:'+95 097958654942',cashbackMptNo:'+95 0925058654942',cashbackOoredooNo:'099758654942', cashbackMytelNo:'096758654942',cashbackMectelNo:'093358654942',cashbackGiftCardsNo:'097958654942', cashbackDTHNo:'097958654942',cashbackElecNo:'097958654942',cashbackPostPaidNo:'097958654942',country:'Thailand',cashbackOvSeasNo:'097958654942',createDateTime: 'Fri, 08-Jun-2021 12:10:20',status:'Complete',refNum: '00002312331'},

]