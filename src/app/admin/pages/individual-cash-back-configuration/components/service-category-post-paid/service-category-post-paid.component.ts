import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-service-category-post-paid',
  templateUrl: './service-category-post-paid.component.html',
  styleUrls: ['./service-category-post-paid.component.scss']
})
export class ServiceCategoryPostPaidComponent implements OnInit {
  operatorWise_postPaid_form!: FormGroup;
  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor( private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.operatorWise_postPaid_form = this._formBuilder.group({
      Remarks: [""],
      postPaid_number: ["", Validators.required],
    })
  }

  formValidation(){
    if (this.operatorWise_postPaid_form.invalid) {
      this.newItemEvent.emit(false);
    }
    else{
      this.newItemEvent.emit(true);
    }
  }
}
