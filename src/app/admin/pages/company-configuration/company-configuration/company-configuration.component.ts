import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmAlertComponent } from 'src/app/admin/modals/confirm-alert/confirm-alert.component';
import { UpdateCompanyConfigurationComponent } from 'src/app/admin/modals/update-company-configuration/update-company-configuration.component';

@Component({
  selector: 'app-company-configuration',
  templateUrl: './company-configuration.component.html',
  styleUrls: ['./company-configuration.component.scss']
})
export class CompanyConfigurationComponent implements OnInit {
  header = [
    {
      title: 'Company  Name',
      key: 'name'
    },
    {
      title: 'Cash Back Credit OK$  Account',
      key: 'account'
    },
    {
      title: 'OK$  Account Type',
      key: 'type'
    },
    {
      title: 'Operator Name',
      key: 'operator'
    }
  ];
  data = [
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
  ];
  actions = [
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

  mobileNumberFields = [
    {
      mobileNumberValue: ""
    }
  ]

  constructor(public dialog: MatDialog,private _formBuilder: FormBuilder) { }
  configuration_listingg: boolean = false;
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
}
