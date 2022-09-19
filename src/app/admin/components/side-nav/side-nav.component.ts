import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { menuItems} from '../../../utils/constants';
import { ConfirmAlertComponent } from '../../modals/confirm-alert/confirm-alert.component';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  menuItems: any = menuItems;

  @Output() sideNavCloseEvent = new EventEmitter<boolean>();
  constructor(public router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {
  }
}
