import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-service-category-electricity',
  templateUrl: './service-category-electricity.component.html',
  styleUrls: ['./service-category-electricity.component.scss']
})
export class ServiceCategoryElectricityComponent implements OnInit {
  operatorWise_electricity_form!: FormGroup;
  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor( private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.operatorWise_electricity_form = this._formBuilder.group({
      Remarks: [""],
      electricity_number: ["", Validators.required],
    })
  }

  formValidation(){
    if (this.operatorWise_electricity_form.invalid) {
      this.newItemEvent.emit(false);
    }
    else{
      this.newItemEvent.emit(true);
    }
  }
}
