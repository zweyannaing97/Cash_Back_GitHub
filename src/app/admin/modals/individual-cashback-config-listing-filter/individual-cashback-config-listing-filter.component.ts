import {Component, OnInit, ViewChild} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {BsDatepickerDirective} from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-individual-cashback-config-listing-filter',
  templateUrl: './individual-cashback-config-listing-filter.component.html',
  styleUrls: ['./individual-cashback-config-listing-filter.component.scss']
})
export class IndividualCashbackConfigListingFilterComponent implements OnInit {
  selectedCategory: any = [];
  constructor( public dialogRef: MatDialogRef<IndividualCashbackConfigListingFilterComponent>) { }
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective | undefined; maxDate = new Date();


  ngOnInit() {

  }

  onDismiss(){
    this.dialogRef.close();
  }

  serviceCategorySelected(category: any){
    console.log(category);

    this.selectedCategory = [...category];
  }
}
