import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CompanyConfigurationReportFilterComponent } from 'src/app/admin/modals/company-configuration-report-filter/company-configuration-report-filter.component';

@Component({
  selector: 'app-company-configuration-report-layout',
  templateUrl: './company-configuration-report-layout.component.html',
  styleUrls: ['./company-configuration-report-layout.component.scss']
})
export class CompanyConfigurationReportLayoutComponent implements OnInit {


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  fetchDataEvent(event: any) {
    console.log(event);
  }

  filterTable(){
    const dialogRef = this.dialog.open(CompanyConfigurationReportFilterComponent, {
      width: '950px',
      data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result){}
    });
  }

  displayedColumns: string[] = ['companyName', 'cashbackOkAcc', 'okAccType', 'opName', 'isActive', 'createdDateTime', 'updateDateTime'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  companyName: string;
  cashbackOkAcc: string;
  okAccType: string;
  opName: string;
  isActive: string;
  createdDateTime: string;
  updateDateTime: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {companyName: 'CGM', cashbackOkAcc: '+95 0942079679867', okAccType: 'Merchant', opName: 'Operator', isActive: 'Yes', createdDateTime:'Mon, 08-Jan-2021 09:10:20', updateDateTime:'Mon, 08-Jan-2021 09:10:20'},

  {companyName: 'CGM', cashbackOkAcc: '+95 0942079679867', okAccType: 'Merchant', opName: 'Operator', isActive: 'Yes', createdDateTime:'Mon, 08-Jan-2021 09:10:20', updateDateTime:'Mon, 08-Jan-2021 09:10:20'},

  {companyName: 'CGM', cashbackOkAcc: '+95 0942079679867', okAccType: 'Merchant', opName: 'Operator', isActive: 'Yes', createdDateTime:'Mon, 08-Jan-2021 09:10:20', updateDateTime:'Mon, 08-Jan-2021 09:10:20'},

  {companyName: 'CGM', cashbackOkAcc: '+95 0942079679867', okAccType: 'Merchant', opName: 'Operator', isActive: 'Yes', createdDateTime:'Mon, 08-Jan-2021 09:10:20', updateDateTime:'Mon, 08-Jan-2021 09:10:20'},

  {companyName: 'CGM', cashbackOkAcc: '+95 0942079679867', okAccType: 'Merchant', opName: 'Operator', isActive: 'Yes', createdDateTime:'Mon, 08-Jan-2021 09:10:20', updateDateTime:'Mon, 08-Jan-2021 09:10:20'},

  {companyName: 'CGM', cashbackOkAcc: '+95 0942079679867', okAccType: 'Merchant', opName: 'Operator', isActive: 'Yes', createdDateTime:'Mon, 08-Jan-2021 09:10:20', updateDateTime:'Mon, 08-Jan-2021 09:10:20'},

  {companyName: 'CGM', cashbackOkAcc: '+95 0942079679867', okAccType: 'Merchant', opName: 'Operator', isActive: 'Yes', createdDateTime:'Mon, 08-Jan-2021 09:10:20', updateDateTime:'Mon, 08-Jan-2021 09:10:20'},

  {companyName: 'CGM', cashbackOkAcc: '+95 0942079679867', okAccType: 'Merchant', opName: 'Operator', isActive: 'Yes', createdDateTime:'Mon, 08-Jan-2021 09:10:20', updateDateTime:'Mon, 08-Jan-2021 09:10:20'},

  {companyName: 'CGM', cashbackOkAcc: '+95 0942079679867', okAccType: 'Merchant', opName: 'Operator', isActive: 'Yes', createdDateTime:'Mon, 08-Jan-2021 09:10:20', updateDateTime:'Mon, 08-Jan-2021 09:10:20'},

  {companyName: 'CGM', cashbackOkAcc: '+95 0942079679867', okAccType: 'Merchant', opName: 'Operator', isActive: 'Yes', createdDateTime:'Mon, 08-Jan-2021 09:10:20', updateDateTime:'Mon, 08-Jan-2021 09:10:20'},

  {companyName: 'CGM', cashbackOkAcc: '+95 0942079679867', okAccType: 'Merchant', opName: 'Operator', isActive: 'Yes', createdDateTime:'Mon, 08-Jan-2021 09:10:20', updateDateTime:'Mon, 08-Jan-2021 09:10:20'},

  {companyName: 'CGM', cashbackOkAcc: '+95 0942079679867', okAccType: 'Merchant', opName: 'Operator', isActive: 'Yes', createdDateTime:'Mon, 08-Jan-2021 09:10:20', updateDateTime:'Mon, 08-Jan-2021 09:10:20'},


];
