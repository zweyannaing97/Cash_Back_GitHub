import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-service-category-over-seas-top-up',
  templateUrl: './service-category-over-seas-top-up.component.html',
  styleUrls: ['./service-category-over-seas-top-up.component.scss']
})
export class ServiceCategoryOverSeasTopUpComponent implements OnInit {
  operatorWise_overSeasTopUp_form!: FormGroup;
  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor( private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.operatorWise_overSeasTopUp_form = this._formBuilder.group({
      Remarks: [""],
      overSeasTopUp_number: ["", Validators.required],
      country: ["", Validators.required],
    })
  }

  formValidation(){
    if (this.operatorWise_overSeasTopUp_form.invalid) {
      this.newItemEvent.emit(false);
    }
    else{
      this.newItemEvent.emit(true);
    }
  }
}
