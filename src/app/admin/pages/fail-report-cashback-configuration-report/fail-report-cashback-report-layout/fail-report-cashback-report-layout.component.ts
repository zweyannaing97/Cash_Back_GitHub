import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FailCashbackReportFilterComponent } from 'src/app/admin/modals/fail-cashback-report-filter/fail-cashback-report-filter.component';

@Component({
  selector: 'app-fail-report-cashback-report-layout',
  templateUrl: './fail-report-cashback-report-layout.component.html',
  styleUrls: ['./fail-report-cashback-report-layout.component.scss']
})
export class FailReportCashbackReportLayoutComponent implements OnInit {


  header = [
    {
      title: 'File Name',
      key: 'name',
      style: 'text-decoration: underline;'
    },
    {
      title: 'Reference Number',
      key: 'ref_no',
      style: 'text-decoration: underline;'
    },
    {
      title: 'Status',
      key: 'status'
    },
    {
      title: 'Action',
      key: 'operator'
    },
    ];
  data = [
    {
      name: 'File Name 1',
      ref_no: '00217454',
      status: 'Error',
      operator: 'MPT'
    },
    {
      name: 'File Name 2',
      ref_no: '00217454',
      status: 'Error',
      operator: 'MPT'
      },
    {
      name: 'File Name 3',
      ref_no: '00217454',
      status: 'Error',
      operator: 'MPT'
    },
    {
      name: 'File Name 4',
      ref_no: '00217454',
      status: 'Error',
      operator: 'MPT'
    },
    {
      name: 'File Name 5',
      ref_no: '00217454',
      status: 'Error',
      operator: 'MPT'
    },
    {
      name: 'File Name 6',
      ref_no: '00217454',
      status: 'Error',
      operator: 'MPT'
    },
    {
      name: 'File Name 7',
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


  file_header = [
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
  file_data = [
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


  showFileTable: boolean = false;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  filterTable(){
    const dialogRef = this.dialog.open(FailCashbackReportFilterComponent, {
      width: '850px',
      data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result){}
    });
  }

  actionEvent(event: any){
    if (event.type == "view") {
      let selected_table_row = this.data.filter(function(value) {
        return value.name == event.row.name;
      });
      this.data = selected_table_row;
      delete this.header[0].style;
      delete this.header[1].style;
      this.showFileTable = true;
    }
  }
  fetchDataEvent(event: any){}
  fileFetchDataEvent(event: any){}

  displayedColumns: string[] = ['fileName', 'refNo', 'confType', 'createdDateTime', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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

  {fileName: 'File Name 2', refNo: '000219834', confType: 'Bulk', createdDateTime: 'Fri,08-Jun-2021 12:10:20', action: 'assets/images/view_table.png'},

  {fileName: 'File Name 3', refNo: '000219834', confType: 'Bulk', createdDateTime: 'Fri,08-Jun-2021 12:10:20', action: 'assets/images/view_table.png'},

  {fileName: 'File Name 4', refNo: '000219834', confType: 'Bulk', createdDateTime: 'Fri,08-Jun-2021 12:10:20', action: 'assets/images/view_table.png'},

  {fileName: 'File Name 5', refNo: '000219834', confType: 'Bulk', createdDateTime: 'Fri,08-Jun-2021 12:10:20', action: 'assets/images/view_table.png'},


  {fileName: 'File Name 6', refNo: '000219834', confType: 'Bulk', createdDateTime: 'Fri,08-Jun-2021 12:10:20', action: 'assets/images/view_table.png'},

  {fileName: 'File Name 7', refNo: '000219834', confType: 'Bulk', createdDateTime: 'Fri,08-Jun-2021 12:10:20', action: 'assets/images/view_table.png'},

  {fileName: 'File Name 8', refNo: '000219834', confType: 'Bulk', createdDateTime: 'Fri,08-Jun-2021 12:10:20', action: 'assets/images/view_table.png'},

  {fileName: 'File Name 9', refNo: '000219834', confType: 'Bulk', createdDateTime: 'Fri,08-Jun-2021 12:10:20', action: 'assets/images/view_table.png'},

  {fileName: 'File Name 10', refNo: '000219834', confType: 'Bulk', createdDateTime: 'Fri,08-Jun-2021 12:10:20', action: 'assets/images/view_table.png'},

  {fileName: 'File Name 11', refNo: '000219834', confType: 'Bulk', createdDateTime: 'Fri,08-Jun-2021 12:10:20', action: 'assets/images/view_table.png'},

  {fileName: 'File Name 12', refNo: '000219834', confType: 'Bulk', createdDateTime: 'Fri,08-Jun-2021 12:10:20', action: 'assets/images/view_table.png'},

  {fileName: 'File Name 13', refNo: '000219834', confType: 'Bulk', createdDateTime: 'Fri,08-Jun-2021 12:10:20', action: 'assets/images/view_table.png'},

  {fileName: 'File Name 14', refNo: '000219834', confType: 'Bulk', createdDateTime: 'Fri,08-Jun-2021 12:10:20', action: 'assets/images/view_table.png'},

];