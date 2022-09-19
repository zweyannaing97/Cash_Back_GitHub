import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { actionString, customColumnsString, iconOnly, textOnly, iconAndText } from 'src/app/utils/constants';
import { ActionsData, CustomColumnButtonData } from 'src/app/utils/models';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements AfterViewInit, OnInit, OnChanges {
  displayedColumns: string[] = [];
  dataSource!: MatTableDataSource<any>;
  totalColumns: number = 0;
  actionString = actionString;
  customColumnsString = customColumnsString;
  iconOnly = iconOnly;
  textOnly = textOnly;
  iconAndText = iconAndText;
  pageIndex!: number;
  pageSize!: number;
  length!: number;
  offset = 0;
  limit = 20;
  tempHead: any[] = [];
  tableHeaders: any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @Input() data: any;
  @Input() header: any[] = [];
  @Input() actions!: ActionsData[];
  @Input() totalDataCount!: number;
  @Input() customColumns!: CustomColumnButtonData[];
  @Input() noPaginator!: boolean;
  @Output() actionEvent = new EventEmitter<any>();
  @Output() customColumnEvent = new EventEmitter<any>();
  @Output() fetchDataEvent = new EventEmitter<any>();
  @Output() itemCustomClickEvent = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  ngOnChanges(changes: any) {
    this.tableHeaders = [];
    this.tableHeaders = [...this.header];
    this.processTable();
    this.dataSource = new MatTableDataSource(this.data);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  processTable() {
    let refCount = 0;
    this.displayedColumns = [];
    this.tempHead = [];
    // this.header = this.tempHead;
    if (this.tableHeaders) {
      this.tableHeaders.forEach((_: any, i: number) => {
        this.displayedColumns.push(`def${i}`);
        refCount++;
      });
    }

    if (this.actions && !this.tempHead.includes('actions')) {
      this.tableHeaders.push({title: this.actionString, key: this.actionString});
      this.tempHead.push('actions');
      this.displayedColumns.push(`def${refCount}`);
      refCount++;
    }

    this.totalColumns = this.tableHeaders.length || 0;
  }

  actionClick(row: any, type: string) {
    this.actionEvent.emit({row, type})
  }

  customColumnClick(row: any, type: string) {
    this.customColumnEvent.emit({row, type})
  }

  getServerData(event: any) {
    this.offset = event.pageIndex * event.pageSize;
    this.limit = event.pageSize;
    this.fetchDataEvent.emit({offset: this.offset, limit: this.limit})
  }

  itemCustomClickHandler (row: any) {
    this.itemCustomClickEvent.emit(row)
  }
}
