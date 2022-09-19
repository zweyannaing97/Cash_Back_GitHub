import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-service-category-gift-cards',
  templateUrl: './service-category-gift-cards.component.html',
  styleUrls: ['./service-category-gift-cards.component.scss']
})
export class ServiceCategoryGiftCardsComponent implements OnInit {
  category_giftcards_form!: FormGroup;
  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor( private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.category_giftcards_form = this._formBuilder.group({
      Remarks: [""],
      giftCards_number: ["", Validators.required],
    });
  }

  formValidation(){
    if (this.category_giftcards_form.invalid) {
      this.newItemEvent.emit(false);
    }
    else{
      this.newItemEvent.emit(true);
    }
  }
}
