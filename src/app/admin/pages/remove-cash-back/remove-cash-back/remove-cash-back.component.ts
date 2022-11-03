import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmAlertComponent } from 'src/app/admin/modals/confirm-alert/confirm-alert.component';
import { RemoveCashbackAlertComponent } from 'src/app/admin/modals/remove-cashback-alert/remove-cashback-alert.component';
import { RemoveCashbackListingEditComponent } from 'src/app/admin/modals/remove-cashback-listing-edit/remove-cashback-listing-edit.component';
import { RemoveCashbackListingFilterComponent } from 'src/app/admin/modals/remove-cashback-listing-filter/remove-cashback-listing-filter.component';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-remove-cash-back',
  templateUrl: './remove-cash-back.component.html',
  styleUrls: ['./remove-cash-back.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RemoveCashBackComponent implements OnInit {


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  edit(){
    const dialogRef = this.dialog.open(RemoveCashbackListingEditComponent, {
      width: '750px',
      data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result){
        }
    });
  }

  delete(){
    const dialogRef = this.dialog.open(ConfirmAlertComponent, {
      width: '550px',
      data: {
        message: 'Are you sure want to remove this cash back setting?',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result){
          const dialogRef = this.dialog.open(RemoveCashbackAlertComponent, {
            width: '550px',
            data: {}
            });

            dialogRef.afterClosed().subscribe(result => {
              if(result){

              }
          });
        }
    });
  }

  fetchDataEvent(event: any) {
  }

  filterTable(){
    const dialogRef = this.dialog.open(RemoveCashbackListingFilterComponent, {
      width: '850px',
      data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result){}
    });
  }

  itemCustomCLickHandler (data: any) {
  }

  displayedColumns: string[] = ['configType', 'companyName', 'divisionState', 'district','township','cityTown','agentCode','branch','okAccNo','cashbackOkAcc','serviceType','okAccType','cashbackOpwise','cashbackTelenorNo','cashbackMPTNo','cashbackOoredooNo','cashbackMytelNo','cashbackMectelNo','cashbackGiftCardsNo','cashbackDTHNo','cashbackElecNo','cashbackPostPaidNo','country','cashbackOvSeasNo','createdDateTime','updateDateTime','suspenseStartDateTime','suspenseEndDateTime','active','action'];

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  configType: string;
  companyName: string;
  divisionState: string;
  district: string;
  township: string;
  cityTown: string;
  agentCode: string;
  branch: string;
  okAccNo: string;
  cashbackOkAcc: string;
  serviceType: string;
  okAccType: string;

  cashbackOpwise: string;
  cashbackTelenorNo: string;
  cashbackMPTNo: string;
  cashbackOoredooNo: string;
  cashbackMytelNo: string;
  cashbackMectelNo: string;
  cashbackGiftCardsNo: string;
  cashbackDTHNo: string;
  cashbackElecNo: string;
  cashbackPostPaidNo: string;
  country: string;
  cashbackOvSeasNo: string;
  createdDateTime: string;
  updateDateTime: string;
  suspenseStartDateTime: string;
  suspenseEndDateTime: string;
  active: string;
  action: object;


}

const ELEMENT_DATA: PeriodicElement[] = [
  {configType: 'Individual', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode: 'OK$ 00001',  branch: 'Botahtaung Branch', okAccNo: '+95 09420869132', cashbackOkAcc: '+95 09420869132', serviceType: 'All', okAccType: 'Merchant ', cashbackOpwise: 'All', cashbackTelenorNo: '+95 09790869132', cashbackMPTNo: '+95 094250869132', cashbackOoredooNo: '+95 0997869132', cashbackMytelNo: '+95 09670869132', cashbackMectelNo: '+95 09330869132', cashbackGiftCardsNo: '+95 09420869132', cashbackDTHNo: '+95 09420869132', cashbackElecNo: '+95 09420869132', cashbackPostPaidNo: '+95 09420869132', country: 'Thailand', cashbackOvSeasNo: '+95 09420869132', createdDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20', suspenseStartDateTime: '-',  suspenseEndDateTime: '-', active: 'Complete', action: ['assets/images/temporary-suspense-date.svg','assets/images/delete.svg']},

  {configType: 'Individual', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode: 'OK$ 00001',  branch: 'Botahtaung Branch', okAccNo: '+95 09420869132', cashbackOkAcc: '+95 09420869132', serviceType: 'All', okAccType: 'Merchant ', cashbackOpwise: 'All', cashbackTelenorNo: '+95 09790869132', cashbackMPTNo: '+95 094250869132', cashbackOoredooNo: '+95 0997869132', cashbackMytelNo: '+95 09670869132', cashbackMectelNo: '+95 09330869132', cashbackGiftCardsNo: '+95 09420869132', cashbackDTHNo: '+95 09420869132', cashbackElecNo: '+95 09420869132', cashbackPostPaidNo: '+95 09420869132', country: 'Thailand', cashbackOvSeasNo: '+95 09420869132', createdDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20', suspenseStartDateTime: '-',  suspenseEndDateTime: '-', active: 'Complete', action: ['assets/images/temporary-suspense-date.svg','assets/images/delete.svg']},


  {configType: 'Individual', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode: 'OK$ 00001',  branch: 'Botahtaung Branch', okAccNo: '+95 09420869132', cashbackOkAcc: '+95 09420869132', serviceType: 'All', okAccType: 'Merchant ', cashbackOpwise: 'All', cashbackTelenorNo: '+95 09790869132', cashbackMPTNo: '+95 094250869132', cashbackOoredooNo: '+95 0997869132', cashbackMytelNo: '+95 09670869132', cashbackMectelNo: '+95 09330869132', cashbackGiftCardsNo: '+95 09420869132', cashbackDTHNo: '+95 09420869132', cashbackElecNo: '+95 09420869132', cashbackPostPaidNo: '+95 09420869132', country: 'Thailand', cashbackOvSeasNo: '+95 09420869132', createdDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20', suspenseStartDateTime: 'Mon, 08-Jan-2021 09:10:20',  suspenseEndDateTime: 'Mon, 08-Jan-2021 09:10:20', active: 'Complete', action: ['assets/images/temporary-suspense-date.svg','assets/images/delete.svg']},

  {configType: 'Individual', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode: 'OK$ 00001',  branch: 'Botahtaung Branch', okAccNo: '+95 09420869132', cashbackOkAcc: '+95 09420869132', serviceType: 'All', okAccType: 'Merchant ', cashbackOpwise: 'All', cashbackTelenorNo: '+95 09790869132', cashbackMPTNo: '+95 094250869132', cashbackOoredooNo: '+95 0997869132', cashbackMytelNo: '+95 09670869132', cashbackMectelNo: '+95 09330869132', cashbackGiftCardsNo: '+95 09420869132', cashbackDTHNo: '+95 09420869132', cashbackElecNo: '+95 09420869132', cashbackPostPaidNo: '+95 09420869132', country: 'Thailand', cashbackOvSeasNo: '+95 09420869132', createdDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20', suspenseStartDateTime: 'Mon, 08-Jan-2021 09:10:20',  suspenseEndDateTime: 'Mon, 08-Jan-2021 09:10:20', active: 'Complete', action: ['assets/images/temporary-suspense-date.svg','assets/images/delete.svg']},

  {configType: 'Individual', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode: 'OK$ 00001',  branch: 'Botahtaung Branch', okAccNo: '+95 09420869132', cashbackOkAcc: '+95 09420869132', serviceType: 'All', okAccType: 'Merchant ', cashbackOpwise: 'All', cashbackTelenorNo: '+95 09790869132', cashbackMPTNo: '+95 094250869132', cashbackOoredooNo: '+95 0997869132', cashbackMytelNo: '+95 09670869132', cashbackMectelNo: '+95 09330869132', cashbackGiftCardsNo: '+95 09420869132', cashbackDTHNo: '+95 09420869132', cashbackElecNo: '+95 09420869132', cashbackPostPaidNo: '+95 09420869132', country: 'Thailand', cashbackOvSeasNo: '+95 09420869132', createdDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20', suspenseStartDateTime: '-',  suspenseEndDateTime: '-', active: 'Complete', action: ['assets/images/temporary-suspense-date.svg','assets/images/delete.svg']},

  {configType: 'Individual', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode: 'OK$ 00001',  branch: 'Botahtaung Branch', okAccNo: '+95 09420869132', cashbackOkAcc: '+95 09420869132', serviceType: 'All', okAccType: 'Merchant ', cashbackOpwise: 'All', cashbackTelenorNo: '+95 09790869132', cashbackMPTNo: '+95 094250869132', cashbackOoredooNo: '+95 0997869132', cashbackMytelNo: '+95 09670869132', cashbackMectelNo: '+95 09330869132', cashbackGiftCardsNo: '+95 09420869132', cashbackDTHNo: '+95 09420869132', cashbackElecNo: '+95 09420869132', cashbackPostPaidNo: '+95 09420869132', country: 'Thailand', cashbackOvSeasNo: '+95 09420869132', createdDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20', suspenseStartDateTime: '-',  suspenseEndDateTime: '-', active: 'Complete', action: ['assets/images/temporary-suspense-date.svg','assets/images/delete.svg']},

  {configType: 'Individual', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode: 'OK$ 00001',  branch: 'Botahtaung Branch', okAccNo: '+95 09420869132', cashbackOkAcc: '+95 09420869132', serviceType: 'All', okAccType: 'Merchant ', cashbackOpwise: 'All', cashbackTelenorNo: '+95 09790869132', cashbackMPTNo: '+95 094250869132', cashbackOoredooNo: '+95 0997869132', cashbackMytelNo: '+95 09670869132', cashbackMectelNo: '+95 09330869132', cashbackGiftCardsNo: '+95 09420869132', cashbackDTHNo: '+95 09420869132', cashbackElecNo: '+95 09420869132', cashbackPostPaidNo: '+95 09420869132', country: 'Thailand', cashbackOvSeasNo: '+95 09420869132', createdDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20', suspenseStartDateTime: '-',  suspenseEndDateTime: '-', active: 'Complete', action: ['assets/images/temporary-suspense-date.svg','assets/images/delete.svg']},

  {configType: 'Individual', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode: 'OK$ 00001',  branch: 'Botahtaung Branch', okAccNo: '+95 09420869132', cashbackOkAcc: '+95 09420869132', serviceType: 'All', okAccType: 'Merchant ', cashbackOpwise: 'All', cashbackTelenorNo: '+95 09790869132', cashbackMPTNo: '+95 094250869132', cashbackOoredooNo: '+95 0997869132', cashbackMytelNo: '+95 09670869132', cashbackMectelNo: '+95 09330869132', cashbackGiftCardsNo: '+95 09420869132', cashbackDTHNo: '+95 09420869132', cashbackElecNo: '+95 09420869132', cashbackPostPaidNo: '+95 09420869132', country: 'Thailand', cashbackOvSeasNo: '+95 09420869132', createdDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20', suspenseStartDateTime: '-',  suspenseEndDateTime: '-', active: 'Complete', action: ['assets/images/temporary-suspense-date.svg','assets/images/delete.svg']},

  {configType: 'Individual', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode: 'OK$ 00001',  branch: 'Botahtaung Branch', okAccNo: '+95 09420869132', cashbackOkAcc: '+95 09420869132', serviceType: 'All', okAccType: 'Merchant ', cashbackOpwise: 'All', cashbackTelenorNo: '+95 09790869132', cashbackMPTNo: '+95 094250869132', cashbackOoredooNo: '+95 0997869132', cashbackMytelNo: '+95 09670869132', cashbackMectelNo: '+95 09330869132', cashbackGiftCardsNo: '+95 09420869132', cashbackDTHNo: '+95 09420869132', cashbackElecNo: '+95 09420869132', cashbackPostPaidNo: '+95 09420869132', country: 'Thailand', cashbackOvSeasNo: '+95 09420869132', createdDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20', suspenseStartDateTime: '-',  suspenseEndDateTime: '-', active: 'Complete', action: ['assets/images/temporary-suspense-date.svg','assets/images/delete.svg']},

  {configType: 'Individual', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode: 'OK$ 00001',  branch: 'Botahtaung Branch', okAccNo: '+95 09420869132', cashbackOkAcc: '+95 09420869132', serviceType: 'All', okAccType: 'Merchant ', cashbackOpwise: 'All', cashbackTelenorNo: '+95 09790869132', cashbackMPTNo: '+95 094250869132', cashbackOoredooNo: '+95 0997869132', cashbackMytelNo: '+95 09670869132', cashbackMectelNo: '+95 09330869132', cashbackGiftCardsNo: '+95 09420869132', cashbackDTHNo: '+95 09420869132', cashbackElecNo: '+95 09420869132', cashbackPostPaidNo: '+95 09420869132', country: 'Thailand', cashbackOvSeasNo: '+95 09420869132', createdDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20', suspenseStartDateTime: '-',  suspenseEndDateTime: '-', active: 'Complete', action: ['assets/images/temporary-suspense-date.svg','assets/images/delete.svg']},

  {configType: 'Individual', companyName: 'CGM', divisionState: 'Yangon', district: 'Eastern', township: 'Botahtaung', cityTown: 'Yangon', agentCode: 'OK$ 00001',  branch: 'Botahtaung Branch', okAccNo: '+95 09420869132', cashbackOkAcc: '+95 09420869132', serviceType: 'All', okAccType: 'Merchant ', cashbackOpwise: 'All', cashbackTelenorNo: '+95 09790869132', cashbackMPTNo: '+95 094250869132', cashbackOoredooNo: '+95 0997869132', cashbackMytelNo: '+95 09670869132', cashbackMectelNo: '+95 09330869132', cashbackGiftCardsNo: '+95 09420869132', cashbackDTHNo: '+95 09420869132', cashbackElecNo: '+95 09420869132', cashbackPostPaidNo: '+95 09420869132', country: 'Thailand', cashbackOvSeasNo: '+95 09420869132', createdDateTime: 'Mon, 08-Jan-2021 09:10:20',updateDateTime: 'Mon, 08-Jan-2021 09:10:20', suspenseStartDateTime: '-',  suspenseEndDateTime: '-', active: 'Complete', action: ['assets/images/temporary-suspense-date.svg','assets/images/delete.svg']},



];