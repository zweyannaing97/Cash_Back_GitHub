import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmAlertComponent } from 'src/app/admin/modals/confirm-alert/confirm-alert.component';
import { UpdateCompanyConfigurationComponent } from 'src/app/admin/modals/update-company-configuration/update-company-configuration.component';
import { MatPaginator } from '@angular/material/paginator';

import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-company-configuration',
  templateUrl: './company-configuration.component.html',
  styleUrls: ['./company-configuration.component.scss']
})
export class CompanyConfigurationComponent implements OnInit {
 

  mobileNumberFields = [
    {
      mobileNumberValue: ""
    }
  ]

  constructor(public dialog: MatDialog,private _formBuilder: FormBuilder) { }
  configuration_listingg: boolean = true;
  showMobileInfo: boolean = false;
  show_buttons: boolean = false;
  company_name:any;

  ngOnInit() {
  }

  actionEvent(event: any) {
    if (event. type == "edit") {
      const dialogRef = this.dialog.open(UpdateCompanyConfigurationComponent, {
        width: '950px',
        data: { }
        });

        dialogRef.afterClosed().subscribe(result => {
          if(result){

          }
      });
    }
    if (event.type == "delete") {
      const dialogRef = this.dialog.open(ConfirmAlertComponent, {
        width: '550px',
        data: {
          message: 'Are you sure want to delete?',
          confirmButtonText: 'YES',
          cancelButtonText: 'NO',
        }
        });

        dialogRef.afterClosed().subscribe(result => {
          if(result){

          }
      });
    }
  }

  fetchDataEvent(event: any) {
  }

  itemCustomCLickHandler(event: any) {

  }

  configuration_listing(){
    this.configuration_listingg = true;
  }

  addMobile(){
    const mobileNumberFieldsObject =  {
      mobileNumberValue: ""
    }
    if (this.mobileNumberFields.length < 5) {
      this.mobileNumberFields.push(mobileNumberFieldsObject);
    }
  }
  deleteMobile(row: any){
    if (this.mobileNumberFields.length < 2) {
      return;
    }

    const indexToDelete = this.mobileNumberFields.indexOf(row);
    this.mobileNumberFields.splice(indexToDelete, 1);
  }

  formValidation() {
    if (this.company_name == '' || this.mobileNumberFields[0].mobileNumberValue == '') {
      this.show_buttons = false;
    }
    else {
      this.show_buttons = true;
    }
  }

  displayedColumns: string[] = ['companyName','cashbackAcc','okAccType','opName','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  } 
}

export interface PeriodicElement {
  companyName: string;
  cashbackAcc: string;
  okAccType: string;
  opName: string;
  action: object;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { companyName: 'CGM',cashbackAcc:'09765745454', okAccType: 'Merchant', opName: 'MPT', action: ['assets/images/edit.svg','assets/images/delete.svg']},
  { companyName: 'OK$',cashbackAcc:'09765745454', okAccType: 'Personal', opName: 'Telenor', action: ['assets/images/edit.svg','assets/images/delete.svg']},
  { companyName: 'GAT',cashbackAcc:'09765745454', okAccType: 'Advance Merchant', opName: 'Ooredoo', action: ['assets/images/edit.svg','assets/images/delete.svg']},
  { companyName: 'One Stop Supermarket',cashbackAcc:'09765745454', okAccType: 'Advance Merchant', opName: 'Mytel', action: ['assets/images/edit.svg','assets/images/delete.svg']},
  { companyName: 'CGM',cashbackAcc:'09765745454', okAccType: 'Merchant', opName: 'MPT', action: ['assets/images/edit.svg','assets/images/delete.svg']},
  { companyName: 'OK$',cashbackAcc:'09765745454', okAccType: 'Personal', opName: 'Telenor', action: ['assets/images/edit.svg','assets/images/delete.svg']},
  { companyName: 'GAT',cashbackAcc:'09765745454', okAccType: 'Advance Merchant', opName: 'Ooredoo', action: ['assets/images/edit.svg','assets/images/delete.svg']},
  { companyName: 'One Stop Supermarket',cashbackAcc:'09765745454', okAccType: 'Advance Merchant', opName: 'Mytel', action: ['assets/images/edit.svg','assets/images/delete.svg']},
  { companyName: 'CGM',cashbackAcc:'09765745454', okAccType: 'Merchant', opName: 'MPT', action: ['assets/images/edit.svg','assets/images/delete.svg']},
  { companyName: 'OK$',cashbackAcc:'09765745454', okAccType: 'Personal', opName: 'Telenor', action: ['assets/images/edit.svg','assets/images/delete.svg']},
  { companyName: 'GAT',cashbackAcc:'09765745454', okAccType: 'Advance Merchant', opName: 'Ooredoo', action: ['assets/images/edit.svg','assets/images/delete.svg']},
  { companyName: 'One Stop Supermarket',cashbackAcc:'09765745454', okAccType: 'Advance Merchant', opName: 'Mytel', action: ['assets/images/edit.svg','assets/images/delete.svg']},
  { companyName: 'CGM',cashbackAcc:'09765745454', okAccType: 'Merchant', opName: 'MPT', action: ['assets/images/edit.svg','assets/images/delete.svg']},
  { companyName: 'OK$',cashbackAcc:'09765745454', okAccType: 'Personal', opName: 'Telenor', action: ['assets/images/edit.svg','assets/images/delete.svg']},
  { companyName: 'GAT',cashbackAcc:'09765745454', okAccType: 'Advance Merchant', opName: 'Ooredoo', action: ['assets/images/edit.svg','assets/images/delete.svg']},
  { companyName: 'One Stop Supermarket',cashbackAcc:'09765745454', okAccType: 'Advance Merchant', opName: 'Mytel', action: ['assets/images/edit.svg','assets/images/delete.svg']},
];
