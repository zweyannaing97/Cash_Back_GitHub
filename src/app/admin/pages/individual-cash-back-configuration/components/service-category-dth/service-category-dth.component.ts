import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-service-category-dth',
  templateUrl: './service-category-dth.component.html',
  styleUrls: ['./service-category-dth.component.scss']
})
export class ServiceCategoryDTHComponent implements OnInit {
  operatorWise_DTH_form!: FormGroup;
  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor( private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.operatorWise_DTH_form = this._formBuilder.group({
      Remarks: [""],
      dth_number: ["", Validators.required],
    })
  }

  formValidation(){
    if (this.operatorWise_DTH_form.invalid) {
      this.newItemEvent.emit(false);
    }
    else{
      this.newItemEvent.emit(true);
    }
  }
}
