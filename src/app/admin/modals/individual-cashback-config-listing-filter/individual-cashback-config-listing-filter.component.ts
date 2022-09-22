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

  dropdownList_mpt:any = [];
  dropdownList_telenor:any = [];
  dropdownList_ooredoo:any = [];
  dropdownList_mytel:any = [];
  dropdownList_mectel:any = [];
  dropdownList_giftCards:any = [];
  dropdownList_dth:any = [];
  dropdownList_electricity: any = [];
  dropdownList_postPaid:any = [];
  dropdownList_overSeas:any = [];
  selectedItems:any = [];

  dropdownSettings_mpt = {};
  dropdownSettings_telenor = {};
  dropdownSettings_ooredoo = {};
  dropdownSettings_mytel = {};
  dropdownSettings_mectel = {};
  dropdownSettings_giftcard = {};
  dropdownSettings_dth = {};
  dropdownSettings_electricity = {};
  dropdownSettings_postpaid = {};
  dropdownSettings_overSeas = {};

  selectedItems_mpt: any;
  selectedItems_telenor: any;
  selectedItems_ooredoo: any;
  selectedItems_mytel: any;
  selectedItems_mectel: any;
  selectedItems_giftcard: any;
  selectedItems_dth: any;
  selectedItems_electricity: any;
  selectedItems_postpaid: any;
  selectedItems_overSeas: any;

  ngOnInit() {
    this.dropdownList_mpt = [
      { item_id: 1, item_text: '+95 746573894788' },
      { item_id: 2, item_text: '+95 7465794788' },
      { item_id: 3, item_text: '+95 74894788' },
      { item_id: 4, item_text: '+95 74657894788' },
      { item_id: 5, item_text: '+95 7465738948' }
    ];

    this.dropdownList_telenor = [
      { item_id: 1, item_text: '+95 746573894788' },
      { item_id: 2, item_text: '+95 7465794788' },
      { item_id: 3, item_text: '+95 74894788' },
      { item_id: 4, item_text: '+95 74657894788' },
      { item_id: 5, item_text: '+95 7465738948' }
    ]

    this.dropdownList_ooredoo = [
      { item_id: 1, item_text: '+95 746573894788' },
      { item_id: 2, item_text: '+95 7465794788' },
      { item_id: 3, item_text: '+95 74894788' },
      { item_id: 4, item_text: '+95 74657894788' },
      { item_id: 5, item_text: '+95 7465738948' }
    ]

    this.dropdownList_mytel = [
      { item_id: 1, item_text: '+95 746573894788' },
      { item_id: 2, item_text: '+95 7465794788' },
      { item_id: 3, item_text: '+95 74894788' },
      { item_id: 4, item_text: '+95 74657894788' },
      { item_id: 5, item_text: '+95 7465738948' }
    ]

    this.dropdownList_mectel = [
      { item_id: 1, item_text: '+95 746573894788' },
      { item_id: 2, item_text: '+95 7465794788' },
      { item_id: 3, item_text: '+95 74894788' },
      { item_id: 4, item_text: '+95 74657894788' },
      { item_id: 5, item_text: '+95 7465738948' }
    ]

    this.dropdownList_giftCards = [
      { item_id: 1, item_text: '+95 746573894788' },
      { item_id: 2, item_text: '+95 7465794788' },
      { item_id: 3, item_text: '+95 74894788' },
      { item_id: 4, item_text: '+95 74657894788' },
      { item_id: 5, item_text: '+95 7465738948' }
    ]

    this.dropdownList_dth = [
      { item_id: 1, item_text: '+95 746573894788' },
      { item_id: 2, item_text: '+95 7465794788' },
      { item_id: 3, item_text: '+95 74894788' },
      { item_id: 4, item_text: '+95 74657894788' },
      { item_id: 5, item_text: '+95 7465738948' }
    ]

    this.dropdownList_electricity = [
      { item_id: 1, item_text: '+95 746573894788' },
      { item_id: 2, item_text: '+95 7465794788' },
      { item_id: 3, item_text: '+95 74894788' },
      { item_id: 4, item_text: '+95 74657894788' },
      { item_id: 5, item_text: '+95 7465738948' }
    ]

    this.dropdownList_postPaid = [
      { item_id: 1, item_text: '+95 746573894788' },
      { item_id: 2, item_text: '+95 7465794788' },
      { item_id: 3, item_text: '+95 74894788' },
      { item_id: 4, item_text: '+95 74657894788' },
      { item_id: 5, item_text: '+95 7465738948' }
    ]
    this.dropdownList_overSeas = [
      { item_id: 1, item_text: '+95 746573894788' },
      { item_id: 2, item_text: '+95 7465794788' },
      { item_id: 3, item_text: '+95 74894788' },
      { item_id: 4, item_text: '+95 74657894788' },
      { item_id: 5, item_text: '+95 7465738948' }
    ]

    this.dropdownSettings_mpt = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true
    };
    this.dropdownSettings_electricity = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true
    };
    this.dropdownSettings_giftcard = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true
    };
    this.dropdownSettings_mectel = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true
    };
    this.dropdownSettings_mytel = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true
    };
    this.dropdownSettings_ooredoo = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true
    };
    this.dropdownSettings_overSeas = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true
    };
    this.dropdownSettings_postpaid = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true
    };
    this.dropdownSettings_telenor = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true
    };
    this.dropdownSettings_dth = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true
    };

  }

  onMptSelect(event: any) {}

  onSelectAllMpt(eventa: any) {}

  onSelectAllTelenor(event: any){}

  onTelenorSelect(event: any){}
  onOoredooSelect(event: any){}

  onSelectAllOoredoo(event: any){}

  onMytelSelect(event: any){}

  onSelectAllMytel(event: any){}

  onMectelSelect(event: any){}

  onSelectAllMectel(event: any){}

  onGiftCardSelect(event: any){}

  onSelectAllGiftCard(event: any){}

  onDthSelect(event: any){}

  onSelectAllDth(event: any){}

  onElectricitySelect(event: any){}

  onSelectAllElectricity(event: any){}

  onPostPaidSelect(event: any){}

  onSelectAllPostPaid(event: any){}

  onOverSeasSelect(event: any) {}

  onSelectAllOverSeas(event: any){}

  onDismiss(){
    this.dialogRef.close();
  }

  serviceCategorySelected(category: any){
    console.log(category);

    this.selectedCategory = [...category];
  }
}
