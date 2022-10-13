import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { SideNavComponent } from '../admin/components/side-nav/side-nav.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from './components/header/header.component';


import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { UpdateCompanyConfigurationComponent } from './modals/update-company-configuration/update-company-configuration.component';
import { ChangedPasswordAlertComponent } from './modals/changed-password-alert/changed-password-alert.component';
import { ConfirmAlertComponent } from './modals/confirm-alert/confirm-alert.component';
import { RemoveCashbackListingFilterComponent } from './modals/remove-cashback-listing-filter/remove-cashback-listing-filter.component';
import { IndividualCashbackConfigListingFilterComponent } from './modals/individual-cashback-config-listing-filter/individual-cashback-config-listing-filter.component';
import { RemoveCashbackListingEditComponent } from './modals/remove-cashback-listing-edit/remove-cashback-listing-edit.component';
import { RemoveCashbackAlertComponent } from './modals/remove-cashback-alert/remove-cashback-alert.component';
import { CompanyConfigurationReportFilterComponent } from './modals/company-configuration-report-filter/company-configuration-report-filter.component';
import { IndividualCashBackReportFilterComponent } from './modals/individual-cash-back-report-filter/individual-cash-back-report-filter.component';
import { InitiateOkAccountDetailFilterComponent } from './modals/initiate-ok-account-detail-filter/initiate-ok-account-detail-filter.component';
import { CompanyWiseDetailReportFilterComponent } from './modals/company-wise-detail-report-filter/company-wise-detail-report-filter.component';
import { OperatorWiseDetailReportFilterComponent } from './modals/operator-wise-detail-report-filter/operator-wise-detail-report-filter.component';
import { InitiateOkAccountSummaryFilterComponent } from './modals/initiate-ok-account-summary-filter/initiate-ok-account-summary-filter.component';
import { MenuListItemComponent } from './components/menu-list-item/menu-list-item.component';
import { FileAlreadyExistComponent } from './modals/file-already-exist/file-already-exist.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { UserRolePermissionFilterComponent } from './modals/user-role-permission-filter/user-role-permission-filter.component';
import { ToptenCashbackDashboardFilterComponent } from './modals/topten-cashback-dashboard-filter/topten-cashback-dashboard-filter.component';
import { CashbackAmountPercentageDashboardFilterComponent } from './modals/cashback-amount-percentage-dashboard-filter/cashback-amount-percentage-dashboard-filter.component';
import { ServiceCategoryDashboardFilterComponent } from './modals/service-category-dashboard-filter/service-category-dashboard-filter.component';
import { CashbackStateDivisonDashboardFilterComponent } from './modals/cashback-state-divison-dashboard-filter/cashback-state-divison-dashboard-filter.component';
import { BulkCashbackReportFilterComponent } from './modals/bulk-cashback-report-filter/bulk-cashback-report-filter.component';
import { FailCashbackReportFilterComponent } from './modals/fail-cashback-report-filter/fail-cashback-report-filter.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    SideNavComponent,
    HeaderComponent,
    UpdateCompanyConfigurationComponent,
    ChangedPasswordAlertComponent,
    ConfirmAlertComponent,
    RemoveCashbackListingFilterComponent,
    IndividualCashbackConfigListingFilterComponent,
    RemoveCashbackListingEditComponent,
    RemoveCashbackAlertComponent,
    CompanyConfigurationReportFilterComponent,
    IndividualCashBackReportFilterComponent,
    InitiateOkAccountDetailFilterComponent,
    CompanyWiseDetailReportFilterComponent,
    OperatorWiseDetailReportFilterComponent,
    InitiateOkAccountSummaryFilterComponent,
    MenuListItemComponent,
    FileAlreadyExistComponent,
    UserRolePermissionFilterComponent,
    ToptenCashbackDashboardFilterComponent,
    CashbackAmountPercentageDashboardFilterComponent,
    ServiceCategoryDashboardFilterComponent,
    CashbackStateDivisonDashboardFilterComponent,
    BulkCashbackReportFilterComponent,
    FailCashbackReportFilterComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatRippleModule,
    MatDialogModule,
    MatSelectModule,
    MatExpansionModule,
   ReactiveFormsModule,MatSnackBarModule,
    MatDatepickerModule,MatNativeDateModule,
   MatRadioModule,
    MatCheckboxModule,
    MatListModule,
    NgMultiSelectDropDownModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
  providers: [
    MatDatepickerModule
  ]
})
export class AdminModule { }
