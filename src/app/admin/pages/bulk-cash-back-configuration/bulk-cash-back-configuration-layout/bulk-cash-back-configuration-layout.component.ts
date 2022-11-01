import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FileAlreadyExistComponent } from 'src/app/admin/modals/file-already-exist/file-already-exist.component';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-bulk-cash-back-configuration-layout',
  templateUrl: './bulk-cash-back-configuration-layout.component.html',
  styleUrls: ['./bulk-cash-back-configuration-layout.component.scss']
})
export class BulkCashBackConfigurationLayoutComponent implements OnInit {
  

  companySelected: boolean = false;
  showTable: boolean = false;
  showFileTable: boolean = false;
  showButtons: boolean = false;
  fileName!:string;
  convertedJson! : string;
  table_length!: number;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  fileUpload(event: any){
    this.showTable = true;
  }

  actionEvent(){
      this.showFileTable = !this.showFileTable;
      this.showButtons = true;
  }
  fetchDataEvent(event: any){}
  fileFetchDataEvent(event: any){}

// alert file name already exist
  showAlert(){
    const dialogRef = this.dialog.open(FileAlreadyExistComponent, {
      width: '750px',
      data: { }
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result){

        }
    });
  }
  displayedColumns: string[] = ['fileName','refNum','status','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  

  displayedColumns2: string[] = ['fileName','referNum','companyName','divisionState','district','township','cityTown','agentCode','branch','okAccNum','cashbackOkAcc','okAccType','cashbackTelenorNumber','cashbackMPTNumber','cashbackOoredooNumber','cashbackMytelNumber','cashbackMecTelNumber','cashbackGiftCardNumber','cashbackDTHNumber','cashbackElecNumber','cashbackPostPaidNumber','cashbackOvSeasNumber','createdDateTime','status','statusReason'];
  dataSource2 = new MatTableDataSource<PeriodicElement2>(ELEMENT_DATA2);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatPaginator) set matPaginator(paginator: MatPaginator) {
    this.dataSource2.paginator = paginator;
}

  // ngAfterViewInit() {
  //   this.dataSource2.paginator = this.paginator;
  // } 
}

export interface PeriodicElement {
  fileName: string;
  refNum: string;
  status: string;
  action: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { fileName: 'FileName A.xlsx',refNum:'0000021234', status: 'Error', action: 'assets/images/view_table.png'},
];

export interface PeriodicElement2 {
  fileName: string;
  referNum: string;
  companyName: string;
  divisionState: string;
  district: string;
  township: string;
  cityTown: string;
  agentCode: string;
  branch: string;
  okAccNum: string;
  cashbackOkAcc: string;
  okAccType: string;
  cashbackTelenorNumber: string;
  cashbackMPTNumber: string;
  cashbackOoredooNumber: string;
  cashbackMytelNumber: string;
  cashbackMecTelNumber: string;
  cashbackGiftCardNumber: string;
  cashbackDTHNumber: string;
  cashbackElecNumber: string;
  cashbackPostPaidNumber: string;
  cashbackOvSeasNumber: string;
  createdDateTime: string;
  status: string;
  statusReason: string;
}
const ELEMENT_DATA2: PeriodicElement2[] = [
  { fileName: 'File Name 1',referNum: '000021834',companyName: 'CGM',divisionState: 'Yangon',district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000000001',branch: 'Botahtaung Branch',okAccNum: '+95 0942089791', cashbackOkAcc: '+95 0979689697', okAccType: 'Merchant', cashbackTelenorNumber: '+95 09798678321',cashbackMPTNumber: '+95 09420807312',cashbackOoredooNumber: '+95 09972325490',cashbackMytelNumber: '+95 09698678321',cashbackMecTelNumber: '+95 09308678321',cashbackGiftCardNumber: '-',cashbackDTHNumber: '-',cashbackElecNumber: '-',cashbackPostPaidNumber: '-',cashbackOvSeasNumber: '-',createdDateTime: 'Fri, 08-Jun-2021 12:10:20', status: 'Error',statusReason: 'Invalid Account Number'},
  { fileName: 'File Name 1',referNum: '000021834',companyName: 'CGM',divisionState: 'Yangon',district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000000001',branch: 'Botahtaung Branch',okAccNum: '+95 0942089791', cashbackOkAcc: '+95 0979689697', okAccType: 'Merchant', cashbackTelenorNumber: '+95 09798678321',cashbackMPTNumber: '+95 09420807312',cashbackOoredooNumber: '+95 09972325490',cashbackMytelNumber: '+95 09698678321',cashbackMecTelNumber: '+95 09308678321',cashbackGiftCardNumber: '-',cashbackDTHNumber: '-',cashbackElecNumber: '-',cashbackPostPaidNumber: '-',cashbackOvSeasNumber: '-',createdDateTime: 'Fri, 08-Jun-2021 12:10:20', status: 'Error',statusReason: 'Invalid Account Number'},
  { fileName: 'File Name 1',referNum: '000021834',companyName: 'CGM',divisionState: 'Yangon',district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000000001',branch: 'Botahtaung Branch',okAccNum: '+95 0942089791', cashbackOkAcc: '+95 0979689697', okAccType: 'Merchant', cashbackTelenorNumber: '+95 09798678321',cashbackMPTNumber: '+95 09420807312',cashbackOoredooNumber: '+95 09972325490',cashbackMytelNumber: '+95 09698678321',cashbackMecTelNumber: '+95 09308678321',cashbackGiftCardNumber: '-',cashbackDTHNumber: '-',cashbackElecNumber: '-',cashbackPostPaidNumber: '-',cashbackOvSeasNumber: '-',createdDateTime: 'Fri, 08-Jun-2021 12:10:20', status: 'Error',statusReason: 'Invalid Account Number'},

  { fileName: 'File Name 1',referNum: '000021834',companyName: 'CGM',divisionState: 'Yangon',district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000000001',branch: 'Botahtaung Branch',okAccNum: '+95 0942089791', cashbackOkAcc: '+95 0979689697', okAccType: 'Merchant', cashbackTelenorNumber: '+95 09798678321',cashbackMPTNumber: '+95 09420807312',cashbackOoredooNumber: '+95 09972325490',cashbackMytelNumber: '+95 09698678321',cashbackMecTelNumber: '+95 09308678321',cashbackGiftCardNumber: '-',cashbackDTHNumber: '-',cashbackElecNumber: '-',cashbackPostPaidNumber: '-',cashbackOvSeasNumber: '-',createdDateTime: 'Fri, 08-Jun-2021 12:10:20', status: 'Error',statusReason: 'Invalid Account Number'},

  { fileName: 'File Name 1',referNum: '000021834',companyName: 'CGM',divisionState: 'Yangon',district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000000001',branch: 'Botahtaung Branch',okAccNum: '+95 0942089791', cashbackOkAcc: '+95 0979689697', okAccType: 'Merchant', cashbackTelenorNumber: '+95 09798678321',cashbackMPTNumber: '+95 09420807312',cashbackOoredooNumber: '+95 09972325490',cashbackMytelNumber: '+95 09698678321',cashbackMecTelNumber: '+95 09308678321',cashbackGiftCardNumber: '-',cashbackDTHNumber: '-',cashbackElecNumber: '-',cashbackPostPaidNumber: '-',cashbackOvSeasNumber: '-',createdDateTime: 'Fri, 08-Jun-2021 12:10:20', status: 'Error',statusReason: 'Invalid Account Number'},

  { fileName: 'File Name 1',referNum: '000021834',companyName: 'CGM',divisionState: 'Yangon',district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000000001',branch: 'Botahtaung Branch',okAccNum: '+95 0942089791', cashbackOkAcc: '+95 0979689697', okAccType: 'Merchant', cashbackTelenorNumber: '+95 09798678321',cashbackMPTNumber: '+95 09420807312',cashbackOoredooNumber: '+95 09972325490',cashbackMytelNumber: '+95 09698678321',cashbackMecTelNumber: '+95 09308678321',cashbackGiftCardNumber: '-',cashbackDTHNumber: '-',cashbackElecNumber: '-',cashbackPostPaidNumber: '-',cashbackOvSeasNumber: '-',createdDateTime: 'Fri, 08-Jun-2021 12:10:20', status: 'Error',statusReason: 'Invalid Account Number'},

  { fileName: 'File Name 1',referNum: '000021834',companyName: 'CGM',divisionState: 'Yangon',district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000000001',branch: 'Botahtaung Branch',okAccNum: '+95 0942089791', cashbackOkAcc: '+95 0979689697', okAccType: 'Merchant', cashbackTelenorNumber: '+95 09798678321',cashbackMPTNumber: '+95 09420807312',cashbackOoredooNumber: '+95 09972325490',cashbackMytelNumber: '+95 09698678321',cashbackMecTelNumber: '+95 09308678321',cashbackGiftCardNumber: '-',cashbackDTHNumber: '-',cashbackElecNumber: '-',cashbackPostPaidNumber: '-',cashbackOvSeasNumber: '-',createdDateTime: 'Fri, 08-Jun-2021 12:10:20', status: 'Error',statusReason: 'Invalid Account Number'},

  { fileName: 'File Name 1',referNum: '000021834',companyName: 'CGM',divisionState: 'Yangon',district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000000001',branch: 'Botahtaung Branch',okAccNum: '+95 0942089791', cashbackOkAcc: '+95 0979689697', okAccType: 'Merchant', cashbackTelenorNumber: '+95 09798678321',cashbackMPTNumber: '+95 09420807312',cashbackOoredooNumber: '+95 09972325490',cashbackMytelNumber: '+95 09698678321',cashbackMecTelNumber: '+95 09308678321',cashbackGiftCardNumber: '-',cashbackDTHNumber: '-',cashbackElecNumber: '-',cashbackPostPaidNumber: '-',cashbackOvSeasNumber: '-',createdDateTime: 'Fri, 08-Jun-2021 12:10:20', status: 'Error',statusReason: 'Invalid Account Number'},

  { fileName: 'File Name 1',referNum: '000021834',companyName: 'CGM',divisionState: 'Yangon',district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000000001',branch: 'Botahtaung Branch',okAccNum: '+95 0942089791', cashbackOkAcc: '+95 0979689697', okAccType: 'Merchant', cashbackTelenorNumber: '+95 09798678321',cashbackMPTNumber: '+95 09420807312',cashbackOoredooNumber: '+95 09972325490',cashbackMytelNumber: '+95 09698678321',cashbackMecTelNumber: '+95 09308678321',cashbackGiftCardNumber: '-',cashbackDTHNumber: '-',cashbackElecNumber: '-',cashbackPostPaidNumber: '-',cashbackOvSeasNumber: '-',createdDateTime: 'Fri, 08-Jun-2021 12:10:20', status: 'Error',statusReason: 'Invalid Account Number'},

  { fileName: 'File Name 1',referNum: '000021834',companyName: 'CGM',divisionState: 'Yangon',district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000000001',branch: 'Botahtaung Branch',okAccNum: '+95 0942089791', cashbackOkAcc: '+95 0979689697', okAccType: 'Merchant', cashbackTelenorNumber: '+95 09798678321',cashbackMPTNumber: '+95 09420807312',cashbackOoredooNumber: '+95 09972325490',cashbackMytelNumber: '+95 09698678321',cashbackMecTelNumber: '+95 09308678321',cashbackGiftCardNumber: '-',cashbackDTHNumber: '-',cashbackElecNumber: '-',cashbackPostPaidNumber: '-',cashbackOvSeasNumber: '-',createdDateTime: 'Fri, 08-Jun-2021 12:10:20', status: 'Error',statusReason: 'Invalid Account Number'},

  { fileName: 'File Name 1',referNum: '000021834',companyName: 'CGM',divisionState: 'Yangon',district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000000001',branch: 'Botahtaung Branch',okAccNum: '+95 0942089791', cashbackOkAcc: '+95 0979689697', okAccType: 'Merchant', cashbackTelenorNumber: '+95 09798678321',cashbackMPTNumber: '+95 09420807312',cashbackOoredooNumber: '+95 09972325490',cashbackMytelNumber: '+95 09698678321',cashbackMecTelNumber: '+95 09308678321',cashbackGiftCardNumber: '-',cashbackDTHNumber: '-',cashbackElecNumber: '-',cashbackPostPaidNumber: '-',cashbackOvSeasNumber: '-',createdDateTime: 'Fri, 08-Jun-2021 12:10:20', status: 'Error',statusReason: 'Invalid Account Number'},

  { fileName: 'File Name 1',referNum: '000021834',companyName: 'CGM',divisionState: 'Yangon',district: 'Eastern',township: 'Botahtaung',cityTown:'Yangon', agentCode: 'OK$ 000000001',branch: 'Botahtaung Branch',okAccNum: '+95 0942089791', cashbackOkAcc: '+95 0979689697', okAccType: 'Merchant', cashbackTelenorNumber: '+95 09798678321',cashbackMPTNumber: '+95 09420807312',cashbackOoredooNumber: '+95 09972325490',cashbackMytelNumber: '+95 09698678321',cashbackMecTelNumber: '+95 09308678321',cashbackGiftCardNumber: '-',cashbackDTHNumber: '-',cashbackElecNumber: '-',cashbackPostPaidNumber: '-',cashbackOvSeasNumber: '-',createdDateTime: 'Fri, 08-Jun-2021 12:10:20', status: 'Error',statusReason: 'Invalid Account Number'},
];
