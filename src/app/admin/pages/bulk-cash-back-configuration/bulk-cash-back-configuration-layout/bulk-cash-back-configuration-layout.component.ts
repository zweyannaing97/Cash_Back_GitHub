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
  header = [
    {
      title: 'File Name',
      key: 'name',
      style: 'text-decoration: underline;',
      table_column_style: 'border-right: none;text-align: center !important;',
      table_row_style: 'border: 3px solid #d6c7ec;'
    },
    {
      title: 'Reference Number',
      key: 'ref_no',
      style: 'text-decoration: underline;',
      table_column_style: 'border-right: none;'
    },
    {
      title: 'Status',
      key: 'status',
      table_column_style: 'border-right: none;'
    },
  ];
  data = [
    {
      name: '',
      ref_no: '00217454',
      status: 'Error',
      operator: 'MPT'
    },
  ]
  actions = [
    {
      type: 'view',
      icon: 'assets/images/view_table.png'
    },
  ];

// keys are the titles in uploaded excel sheet or the API keys

    file_header = [
      {
        title: 'Division/State',
        key: 'Division'
      },
      {
        title: 'District',
        key: 'District'
      },
      {
        title: 'City/Town',
        key: 'City/Town'
      },
      {
        title: 'Agent Code ',
        key: 'Agent Code'
      },
      {
        title: 'Branch',
        key: 'Branch'
      },
      {
        title: 'OK$ Account Number',
        key: 'OK$ Account Number'
      },
      {
        title: 'Cash back Credit OK $ Account',
        key: 'Cash back Credit OK $ Account Number'
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
        key: 'Cash Back Credit Telenor Number'
      },
      {
        title: ' Cash Back Credit MPT No. ',
        key: 'Cash Back Credit MPT Number'
      },
      {
        title: 'Cash Back Credit Ooredoo Number',
        key: 'Cash Back Credit Ooredo Number'
      },
      {
        title: ' Cash Back Credit Mytel Number',
        key: 'Cash Back Credit Mytel Number'
      },
      {
        title: ' Cash Back Credit MecTel Number',
        key: 'Cash Back Credit MecTel Number'
      },
      {
        title: 'Cash Back Credit Gift Cards Number ',
        key: 'Cash Back Credit Gift Cards Number'
      },
      {
        title: 'Cash Back Credit DTH Number',
        key: 'Cash Back Credit DTH Number'
      },
      {
        title: ' Cash Back Credit Electricity Number',
        key: 'Cash Back Credit Electricity Credit Number'
      },
      {
        title: 'Cash Back Credit Post Paid Number',
        key: 'Cash Back Credit Post Paid Number'
      },
      {
        title: 'Cash Back Credit Oversea Top Up Number',
        key: 'Cash Back Credit Oversea Top Up Number'
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
    // table data is from the uploaded excel sheet
    file_data = [
    ]
    file_actions = [
      {
        type: 'view',
        icon: 'assets/images/view.png'
      },
      {
        type: 'edit',
        icon: 'assets/images/edit.png'
      },
      {
        type: 'delete',
        icon: 'assets/images/delete.png'
      }
    ];

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
    console.log(event.target.files);
    this.fileName = event.target.files[0].name;
    console.log(this.fileName);
    this.data[0].name = this.fileName;

    const selectedFile = event.target.files[0];
    const reader: FileReader = new FileReader();
    reader.readAsBinaryString(selectedFile);
    reader.onload = (event :any) => {
      let binarydata = event.target.result;
      let workbook = XLSX.read(binarydata,{type:'binary'});
      workbook.SheetNames.forEach(sheet=>{
        let data = [] = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
        console.log(data);
        this.file_data = data;
        this.table_length = data.length;
        this.convertedJson = JSON.stringify(data,undefined,4)
        console.log(this.convertedJson);
      })
    }
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
  displayedColumns: string[] = ['companyName','cashbackAcc','okAccType','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  displayedColumns2: string[] = ['fileName','referNum','companyName','divisionState','district','township','cityTown','agentCode','branch','okAccNum','cashbackOkAcc','okAccType','cashbackTelenorNumber','cashbackMPTNumber','cashbackOoredooNumber','cashbackMytelNumber','cashbackMecTelNumber','cashbackGiftCardNumber','cashbackDTHNumber','cashbackElecNumber','cashbackPostPaidNumber','cashbackOvSeasNumber','createdDateTime','status','statusReason'];
  dataSource2 = new MatTableDataSource<PeriodicElement2>(ELEMENT_DATA2);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource2.paginator = this.paginator;
  } 
}

export interface PeriodicElement {
  companyName: string;
  cashbackAcc: string;
  okAccType: string;
  action: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { companyName: 'FileName A.xlsx',cashbackAcc:'09765745454', okAccType: 'Merchant', action: 'assets/images/view_table.png'},
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
];
