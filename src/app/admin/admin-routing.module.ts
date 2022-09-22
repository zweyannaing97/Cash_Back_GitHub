import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'CompanyListing',
        loadChildren: () =>
          import('./pages/company-listing/company-listing.module').then(
            (m) => m.CompanyListingModule
          ),
      },
      {
        path: 'CompanyCreate',
        loadChildren: () =>
          import('./pages/company-create/company-create.module').then(
            (m) => m.CompanyCreateModule
          ),
      },
      {
        path: 'CompanyEdit',
        loadChildren: () =>
          import('./pages/company-edit/company-edit.module').then(
            (m) => m.CompanyEditModule
          ),
      },
      {
        path: 'DepartmentListing',
        loadChildren: () =>
          import('./pages/department-listing/department-listing.module').then(
            (m) => m.DepartmentListingModule
          ),
      },
      {
        path: 'DepartmentCreate',
        loadChildren: () =>
          import('./pages/departments-create/departments-create-routing.module').then(
            (m) => m.DepartmentsCreateRoutingModule
          ),
      },
      {
        path: 'DepartmentEdit',
        loadChildren: () =>
          import('./pages/department-edit/department-edit.module').then(
            (m) => m.DepartmentEditModule
          ),
      },
      {
        path: 'DesignationListing',
        loadChildren: () =>
          import('./pages/designation/designation.module').then(
            (m) => m.DesignationModule
          ),
      },
      {
        path: 'DesignationCreate',
        loadChildren: () =>
          import('./pages/designation-create/designation-create.module').then(
            (m) => m.DesignationCreateModule
          ),
      },
      {
        path: 'DesignationEdit',
        loadChildren: () =>
          import('./pages/designation-edit/designation-edit.module').then(
            (m) => m.DesignationEditModule
          ),
      },
      {
        path: 'UserRolePermission',
        loadChildren: () =>
          import('./pages/user-role-permission/user-role-permission.module').then(
            (m) => m.UserRolePermissionModule
          ),
      },
      {
        path: 'companyConfiguration',
        loadChildren: () =>
          import('./pages/company-configuration/company-configuration.module').then(
            (m) => m.CompanyConfigurationModule
          ),
      },
      {
        path: 'bulkCashBackConfiguration',
        loadChildren: () =>
          import('./pages/bulk-cash-back-configuration/bulk-cash-back-configuration.module').then(
            (m) => m.BulkCashBackConfigurationModule
          ),
      },
      {
        path: 'individualCashBackConfiguration',
        loadChildren: () =>
          import('./pages/individual-cash-back-configuration/individual-cash-back-configuration.module').then(
            (m) => m.IndividualCashBackConfigurationModule
          ),
      },
      {
        path: 'removeCashBack',
        loadChildren: () =>
          import('./pages/remove-cash-back/remove-cash-back.module').then(
            (m) => m.RemoveCashBackModule
          ),
      },
      {
        path: 'companyConfigurationReport',
        loadChildren: () =>
          import('./pages/company-configuration-report/company-configuration-report.module').then(
            (m) => m.CompanyConfigurationReportModule
          ),
      },
      {
        path: 'bulkCashbackConfigurationReport',
        loadChildren: () =>
          import('./pages/bulk-cashback-configuration-report/bulk-cashback-configuration-report.module').then(
            (m) => m.BulkCashbackConfigurationReportModule
          ),
      },
      {
        path: 'individualCashbackConfigurationReport',
        loadChildren: () =>
          import('./pages/individual-cashback-configuration-report/individual-cashback-configuration-report.module').then(
            (m) => m.IndividualCashbackConfigurationReportModule
          ),
      },
      {
        path: 'failReportCashbackConfigurationReport',
        loadChildren: () =>
          import('./pages/fail-report-cashback-configuration-report/fail-report-cashback-configuration-report.module').then(
            (m) => m.FailReportCashbackConfigurationReportModule
          ),
      },

      {
        path: 'initiateOkAccountNumberDetail',
        loadChildren: () =>
          import('./pages/initiate-ok-account-detail/initiate-ok-account-detail.module').then(
            (m) => m.InitiateOkAccountDetailModule
          ),
      },
      {
        path: 'initiateOkAccountSummaryDetail',
        loadChildren: () =>
          import('./pages/initiate-ok-account-summary/initiate-ok-account-summary.module').then(
            (m) => m.InitiateOkAccountSummaryModule
          ),
      },
      {
        path: 'companyWiseCashBackDetailReport',
        loadChildren: () =>
          import('./pages/company-wise/company-wise.module').then(
            (m) => m.CompanyWiseModule
          ),
      },
      {
        path: 'operatorWiseCashBackDetailReport',
        loadChildren: () =>
          import('./pages/operator-wise/operator-wise.module').then(
            (m) => m.OperatorWiseModule
          ),
      },
      {
        path: 'changePassword',
        loadChildren: () =>
          import('./pages/change-password/change-password.module').then(
            (m) => m.ChangePasswordModule
          ),
      },
      {
        path: 'logout',
        loadChildren: () =>
          import('./pages/logout/logout.module').then(
            (m) => m.LogoutModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
