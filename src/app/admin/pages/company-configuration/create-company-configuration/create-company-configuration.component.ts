import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-company-configuration',
  templateUrl: './create-company-configuration.component.html',
  styleUrls: ['./create-company-configuration.component.scss']
})
export class CreateCompanyConfigurationComponent implements OnInit {

  constructor() { }
  mobileNumberFields = [
    {
      mobileNumberValue: ""
    }
  ]
  
  configuration_listingg: boolean = true;
  showMobileInfo: boolean = false;
  show_buttons: boolean = false;
  company_name:any;

  ngOnInit(): void {
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
