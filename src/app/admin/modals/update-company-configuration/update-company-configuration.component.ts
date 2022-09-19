import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-company-configuration',
  templateUrl: './update-company-configuration.component.html',
  styleUrls: ['./update-company-configuration.component.scss']
})
export class UpdateCompanyConfigurationComponent implements OnInit {

  mobileNumberFields = [
    {
      mobileNumberValue: ""
    }
  ]
  constructor( public dialogRef: MatDialogRef<UpdateCompanyConfigurationComponent>) { }

  ngOnInit(): void {
  }

  onDismiss(){
    this.dialogRef.close(false);
  }

  addMobile(){
    console.log("add");
    
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

}
