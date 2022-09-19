import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-service-category-topup',
  templateUrl: './service-category-topup.component.html',
  styleUrls: ['./service-category-topup.component.scss']
})
export class ServiceCategoryTopupComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<boolean>();

  operatorWiseAllForm!: FormGroup;
  operatorWiseMPTForm!: FormGroup;
  operatorWise_telenor_ooredoo_form!: FormGroup;
  operatorWise_telenor_mytel_form!: FormGroup;
  operatorWise_telenor_mectel_form!: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.operatorWiseAllForm = this._formBuilder.group({
      Remarks: [""],
      mpt_number: ["", Validators.required],
      mectel_number: ["", Validators.required],
      mytel_number: ["", Validators.required],
      ooredoo_numnber: ["", Validators.required],
      telenor_number: ["", Validators.required],
    });

    this.operatorWiseMPTForm = this._formBuilder.group({
      Remarks: [""],
      mpt_number: ["", Validators.required],
    });

    this.operatorWise_telenor_ooredoo_form = this._formBuilder.group({
      Remarks: [""],
      ooredoo_numnber: ["", Validators.required],
      telenor_number: ["", Validators.required],
    });

    this.operatorWise_telenor_mytel_form = this._formBuilder.group({
      Remarks: [""],
      mytel_number: ["", Validators.required],
    });

    this.operatorWise_telenor_mectel_form = this._formBuilder.group({
      Remarks: [""],
      mectel_number: ["", Validators.required],
    });
  }

  cashBackOperatorWise: any = [];
  OperatorWiseSelected(value: any){    
    this.cashBackOperatorWise = [...value];
  }

  formValidation(){
    if (this.operatorWiseAllForm.invalid || this.operatorWiseMPTForm.invalid || this.operatorWise_telenor_ooredoo_form.invalid) {
      this.newItemEvent.emit(false);
    }
    else{
      this.newItemEvent.emit(true);
    }
  }
}
