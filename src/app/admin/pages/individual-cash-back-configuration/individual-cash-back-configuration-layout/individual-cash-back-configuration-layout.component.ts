import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IndividualCashbackConfigListingFilterComponent } from 'src/app/admin/modals/individual-cashback-config-listing-filter/individual-cashback-config-listing-filter.component';
import { categoryItems } from 'src/app/utils/constants';
export interface TableData {
  township: string;
  division: string;
  city: string;
  branch: string;
}
@Component({
  selector: 'app-individual-cash-back-configuration-layout',
  templateUrl: './individual-cash-back-configuration-layout.component.html',
  styleUrls: ['./individual-cash-back-configuration-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IndividualCashBackConfigurationLayoutComponent implements OnInit {

  categoryItems: any = categoryItems;
  selectedCategory: any;
  individual_listing: boolean = true;
  showButtons:boolean = true;
  account_number: string = '';
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  fileName!:string;
  convertedJson! : string


  categoryMenuClick(category_name: any){
    this.showButtons = false;
    this.selectedCategory = category_name;
    if (category_name === 'Close'){
      this.showButtons = true;
    }
  }


  formValidation(event: boolean){
    this.showButtons = event;
  }  

  addData(){
    this.individual_listing = false;
  }

  displayedColumns: string[] = ['divison', 'township', 'cityTown', 'branch'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
}

export interface PeriodicElement {
  divison: string;
  township: string;
  cityTown: string;
  branch: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
  {divison: 'Yangon Divison', township: 'Ahlone', cityTown: 'Dala', branch: 'Kwin Kyaung Street (Ahlone)'},

];