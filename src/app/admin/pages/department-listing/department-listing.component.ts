import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-department-listing',
  templateUrl: './department-listing.component.html',
  styleUrls: ['./department-listing.component.scss']
})
export class DepartmentListingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['deptName', 'remark', 'isActive',  'createDateTime', 'updateDateTime','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface PeriodicElement {
  deptName: string;

  remark: string;
  isActive: string;
  action: string;
  createDateTime: string;
  updateDateTime: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:'Yes',createDateTime:'Mon, 08-Jan-2021 09:10:20', updateDateTime:'Mon, 08-Jan-2021 09:10:20',action:'assets/images/edit.svg'},

  {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:'Yes',createDateTime:'Mon, 08-Jan-2021 09:10:20', updateDateTime:'Mon, 08-Jan-2021 09:10:20',action:'assets/images/edit.svg'},

  {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:'Yes',createDateTime:'Mon, 08-Jan-2021 09:10:20', updateDateTime:'Mon, 08-Jan-2021 09:10:20',action:'assets/images/edit.svg'},

  {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:'Yes',createDateTime:'Mon, 08-Jan-2021 09:10:20', updateDateTime:'Mon, 08-Jan-2021 09:10:20',action:'assets/images/edit.svg'},

  {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:'Yes',createDateTime:'Mon, 08-Jan-2021 09:10:20', updateDateTime:'Mon, 08-Jan-2021 09:10:20',action:'assets/images/edit.svg'},

  {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:'Yes',createDateTime:'Mon, 08-Jan-2021 09:10:20', updateDateTime:'Mon, 08-Jan-2021 09:10:20',action:'assets/images/edit.svg'},

  {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:'Yes',createDateTime:'Mon, 08-Jan-2021 09:10:20', updateDateTime:'Mon, 08-Jan-2021 09:10:20',action:'assets/images/edit.svg'},

  {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:'Yes',createDateTime:'Mon, 08-Jan-2021 09:10:20', updateDateTime:'Mon, 08-Jan-2021 09:10:20',action:'assets/images/edit.svg'},

  {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:'Yes',createDateTime:'Mon, 08-Jan-2021 09:10:20', updateDateTime:'Mon, 08-Jan-2021 09:10:20',action:'assets/images/edit.svg'},

  {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:'Yes',createDateTime:'Mon, 08-Jan-2021 09:10:20', updateDateTime:'Mon, 08-Jan-2021 09:10:20',action:'assets/images/edit.svg'},

  {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:'Yes',createDateTime:'Mon, 08-Jan-2021 09:10:20', updateDateTime:'Mon, 08-Jan-2021 09:10:20',action:'assets/images/edit.svg'},

  {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:'Yes',createDateTime:'Mon, 08-Jan-2021 09:10:20', updateDateTime:'Mon, 08-Jan-2021 09:10:20',action:'assets/images/edit.svg'},

  {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:'Yes',createDateTime:'Mon, 08-Jan-2021 09:10:20', updateDateTime:'Mon, 08-Jan-2021 09:10:20',action:'assets/images/edit.svg'},

  {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:'Yes',createDateTime:'Mon, 08-Jan-2021 09:10:20', updateDateTime:'Mon, 08-Jan-2021 09:10:20',action:'assets/images/edit.svg'},

  {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:'Yes',createDateTime:'Mon, 08-Jan-2021 09:10:20', updateDateTime:'Mon, 08-Jan-2021 09:10:20',action:'assets/images/edit.svg'},

  {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:'Yes',createDateTime:'Mon, 08-Jan-2021 09:10:20', updateDateTime:'Mon, 08-Jan-2021 09:10:20',action:'assets/images/edit.svg'},





];



