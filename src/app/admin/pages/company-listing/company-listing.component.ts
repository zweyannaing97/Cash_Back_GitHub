import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-company-listing',
  templateUrl: './company-listing.component.html',
  styleUrls: ['./company-listing.component.scss']
})
export class CompanyListingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['companyName', 'remark', 'isActive', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface PeriodicElement {
  companyName: string;

  remark: string;
  isActive: string;
  action: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Account Department', isActive:'Yes',action:'assets/images/edit.png'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Admin Department', isActive:'Yes',action:'assets/images/edit.png'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'Yes', action:'assets/images/edit.png'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'Yes',action:'assets/images/edit.png'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'No', action:'assets/images/edit.png'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Account Department', isActive:'Yes', action:'assets/images/edit.png'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Admin Department', isActive:'Yes',action:'assets/images/edit.png'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'Yes', action:'assets/images/edit.png'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'Yes',action:'assets/images/edit.png'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'No', action:'assets/images/edit.png'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Account Department', isActive:'Yes', action:'assets/images/edit.png'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Admin Department', isActive:'Yes',action:'assets/images/edit.png'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'Yes', action:'assets/images/edit.png'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'Yes',action:'assets/images/edit.png'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'No', action:'assets/images/edit.png'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Account Department', isActive:'Yes', action:'assets/images/edit.png'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Admin Department', isActive:'Yes',action:'assets/images/edit.png'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'Yes', action:'assets/images/edit.png'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'Yes',action:'assets/images/edit.png'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'No', action:'assets/images/edit.png'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Account Department', isActive:'Yes', action:'assets/images/edit.png'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Admin Department', isActive:'Yes',action:'assets/images/edit.png'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'Yes', action:'assets/images/edit.png'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'Yes',action:'assets/images/edit.png'},

  {companyName: 'Consumer Goods Myanmar Limited', remark: 'Sales Department', isActive:'No', action:'assets/images/edit.png'},

];

