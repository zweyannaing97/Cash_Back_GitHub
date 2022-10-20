import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-service-category-topup',
  templateUrl: './service-category-topup.component.html',
  styleUrls: ['./service-category-topup.component.scss']
})
export class ServiceCategoryTopupComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<boolean>();
  mpt_number: string = '';
  telenor_number: string = '';
  ooredoo_number: string = '';
  mytel_number: string = '';
  mectel_number: string = '';

  ngOnInit(): void {
  }

  cashBackOperatorWise: any = [];
  OperatorWiseSelected(value: any){    
    this.cashBackOperatorWise = [...value];
    
  }

  formValidation(){
    
    if(this.mpt_number == '' && this.telenor_number == '' && this.ooredoo_number == '' &&this.mytel_number == '' && this.mectel_number == ''){
      this.newItemEvent.emit(false);
    }else{
      this.newItemEvent.emit(true);
    }
  }
}
