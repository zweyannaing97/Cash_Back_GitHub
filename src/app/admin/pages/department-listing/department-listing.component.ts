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

  displayedColumns: string[] = ['deptName', 'remark', 'isActive', 'action'];
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

}


const ELEMENT_DATA: PeriodicElement[] = [
  {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:'Yes', action:'assets/images/edit.png'},

  {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:'Yes', action:'assets/images/edit.png'},

  {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:'Yes', action:'assets/images/edit.png'},

  {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:'Yes', action:'assets/images/edit.png'},

  {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:'Yes', action:'assets/images/edit.png'},

  {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:'Yes', action:'assets/images/edit.png'},

  {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:'Yes', action:'assets/images/edit.png'},

  {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:'Yes', action:'assets/images/edit.png'},

  {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:'Yes', action:'assets/images/edit.png'},

  {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:'Yes', action:'assets/images/edit.png'},

  {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:'Yes', action:'assets/images/edit.png'},

  {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:'Yes', action:'assets/images/edit.png'},

  {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:'Yes', action:'assets/images/edit.png'},

  {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:'Yes', action:'assets/images/edit.png'},

  {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:'Yes', action:'assets/images/edit.png'},

  {deptName: 'Account Department', remark: 'Consumer Good Myanmar', isActive:'Yes', action:'assets/images/edit.png'},





];



