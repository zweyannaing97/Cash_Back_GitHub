import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-service-category-all',
  templateUrl: './service-category-all.component.html',
  styleUrls: ['./service-category-all.component.scss']
})
export class ServiceCategoryAllComponent implements OnInit {
  all_category_form!: FormGroup;
  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.all_category_form = this._formBuilder.group({
      Remarks: [""],
      overSeasTopUp_number: ["", Validators.required],
      postPaid_number: ["", Validators.required],
      electricity_number: ["", Validators.required],
      dth_number: ["", Validators.required],
      giftCards_number: ["", Validators.required],
      mectel_number: ["", Validators.required],
      mytel_number: ["", Validators.required],
      ooredoo_numnber: ["", Validators.required],
      telenor_number: ["", Validators.required],
      account_number: ["", Validators.required],

    });

  }

  formValidation(){
    if (this.all_category_form.invalid) {
      this.newItemEvent.emit(false);
    }
    else{
      this.newItemEvent.emit(true);
    }
  }
}
