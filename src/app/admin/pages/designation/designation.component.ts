import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.scss']
})
export class DesignationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['designName', 'remark', 'isActive', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface PeriodicElement {
  designName: string;
  remark: string;
  isActive: string;
  action: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
  {designName: 'Branch Manager', remark: 'Account Department', isActive:'Yes',action:'assets/images/edit.png'},

  {designName: 'Branch Manager', remark: 'Admin Department', isActive:'Yes',action:'assets/images/edit.png'},

  {designName: 'Branch Manager', remark: 'Sales Department', isActive:'Yes',action:'assets/images/edit.png'},

  {designName: 'Branch Manager', remark: 'Sales Department', isActive:'Yes',action:'assets/images/edit.png'},

  {designName: 'Branch Manager', remark: 'Sales Department', isActive:'No', action:'assets/images/edit.png'},

  {designName: 'Branch Manager', remark: 'Account Department', isActive:'Yes',action:'assets/images/edit.png'},

  {designName: 'Branch Manager', remark: 'Admin Department', isActive:'Yes',action:'assets/images/edit.png'},

  {designName: 'Branch Manager', remark: 'Sales Department', isActive:'Yes', action:'assets/images/edit.png'},

  {designName: 'Branch Manager', remark: 'Sales Department', isActive:'Yes',action:'assets/images/edit.png'},

  {designName: 'Branch Manager', remark: 'Sales Department', isActive:'No',action:'assets/images/edit.png'},

  {designName: 'Branch Manager', remark: 'Account Department', isActive:'Yes',action:'assets/images/edit.png'},

  {designName: 'Branch Manager', remark: 'Admin Department', isActive:'Yes',action:'assets/images/edit.png'},

  {designName: 'Branch Manager', remark: 'Sales Department', isActive:'Yes',action:'assets/images/edit.png'},

  {designName: 'Account Manager', remark: 'Sales Department', isActive:'Yes',action:'assets/images/edit.png'},

  {designName: 'Branch Manager', remark: 'Sales Department', isActive:'No',  action:'assets/images/edit.png'},

  {designName: 'Branch Manager', remark: 'Account Department', isActive:'Yes',action:'assets/images/edit.png'},

  {designName: 'Branch Manager', remark: 'Admin Department', isActive:'Yes',action:'assets/images/edit.png'},

  {designName: 'Branch Manager', remark: 'Sales Department', isActive:'Yes',action:'assets/images/edit.png'},

  {designName: 'Branch Manager', remark: 'Sales Department', isActive:'Yes',action:'assets/images/edit.png'},

  {designName: 'Branch Manager', remark: 'Sales Department', isActive:'No',action:'assets/images/edit.png'},

  {designName: 'Branch Manager', remark: 'Account Department', isActive:'Yes',action:'assets/images/edit.png'},

  {designName: 'Branch Manager', remark: 'Admin Department', isActive:'Yes',action:'assets/images/edit.png'},

  {designName: 'Branch Manager', remark: 'Sales Department', isActive:'Yes',action:'assets/images/edit.png'},

  {designName: 'Branch Manager', remark: 'Sales Department', isActive:'Yes',action:'assets/images/edit.png'},

  {designName: 'Branch Manager', remark: 'Sales Department', isActive:'No',action:'assets/images/edit.png'},

];

