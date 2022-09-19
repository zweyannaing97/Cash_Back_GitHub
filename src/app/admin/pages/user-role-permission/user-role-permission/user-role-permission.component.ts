import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';

import {MatTableDataSource} from '@angular/material/table';
import { UserRolePermissionFilterComponent } from 'src/app/admin/modals/user-role-permission-filter/user-role-permission-filter.component';
import { MatDialog } from '@angular/material/dialog';




@Component({
  selector: 'app-user-role-permission',
  templateUrl: './user-role-permission.component.html',
  styleUrls: ['./user-role-permission.component.scss',],
  encapsulation: ViewEncapsulation.None

})
export class UserRolePermissionComponent implements AfterViewInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(UserRolePermissionFilterComponent, {
      width: '850px',
      data: {}
    });
  }

  // openDialog() {
  //   const dialogRef = this.dialog.open(UserRolePermissionFilterComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  displayedColumns: string[] = ['profile', 'name', 'department', 'designation', 'mobile', 'type', 'transaction', 'rolePermission', 'description', 'isActive', 'dateTime', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
// constructor(public dialog: MatDialog) { }

//   ngOnInit(): void {
//   }

// filterTable();{
//   const dialogRef = this.dialog.open(UserRolePermissionFilterComponent, {
//     width: '850px',
//     data: {}
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       if(result){}
//   });
// }



export interface PeriodicElement {
  profile: string;
  name: string;
  department: string;
  designation: string;
  mobile: string;
  type: string;
  transaction: string;
  rolePermission: string;
  description: string;
  isActive: string;
  dateTime: string;
  action: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
  {profile: 'assets/images/profile.png', name: 'Aye Aye', department: 'Account Department', designation: 'Accoutant', mobile: '+95 09421056929', type:'Admin', transaction:'2', rolePermission:'5', description:'Aye Aye', isActive:'Yes', dateTime:'Mon, 08-Jan-2021 09:10:20', action:'assets/images/edit.png'},

  {profile: 'assets/images/profile.png', name: 'Hla Hla', department: 'Admin Department', designation: 'Branch Manager', mobile: '+95 09251576586', type:'Admin', transaction:'3', rolePermission:'1', description:'Hla Hla', isActive:'Yes', dateTime:'Tue, 09-Jan-2021 10:11:25', action:'assets/images/edit.png'},

  {profile: 'assets/images/profile.png', name: 'Aung Aung', department: 'Sales Department', designation: 'Sales Person', mobile: '+95 09798845585', type:'User', transaction:'4', rolePermission:'2', description:'Aung Aung', isActive:'Yes', dateTime:'Wed, 10-Jan-2021 09:14:18', action:'assets/images/edit.png'},

  {profile: 'assets/images/profile.png', name: 'Mya Mya', department: 'Sales Department', designation: 'Sales Person', mobile: '+95 09915765555', type:'User', transaction:'5', rolePermission:'3', description:'Mya Mya', isActive:'Yes', dateTime:'Thur, 11-Jan-2021 11:15:28', action:'assets/images/edit.png'},

  {profile: 'assets/images/profile.png', name: 'Maung Maung', department: 'Sales Department', designation: 'Branch Manager', mobile: '+95 09251576586', type:'Admin', transaction:'1', rolePermission:'2', description:'Maung Maung', isActive:'No', dateTime:'Fri, 12-Jan-2021 10:18:24', action:'assets/images/edit.png'},

];




