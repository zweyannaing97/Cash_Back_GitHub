import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndividualCashBackConfigurationRoutingModule } from './individual-cash-back-configuration-routing.module';
import { IndividualCashBackConfigurationLayoutComponent } from './individual-cash-back-configuration-layout/individual-cash-back-configuration-layout.component';
import { MatSelectModule } from '@angular/material/select';

import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CustomDataTableModule } from '../../components/custom-data-table/custom-data-table.module';
import { ServiceCategoryAllComponent } from './components/service-category-all/service-category-all.component';
import { ServiceCategoryTopupComponent } from './components/service-category-topup/service-category-topup.component';
import { ServiceCategoryGiftCardsComponent } from './components/service-category-gift-cards/service-category-gift-cards.component';
import { ServiceCategoryDTHComponent } from './components/service-category-dth/service-category-dth.component';
import { ServiceCategoryElectricityComponent } from './components/service-category-electricity/service-category-electricity.component';
import { ServiceCategoryPostPaidComponent } from './components/service-category-post-paid/service-category-post-paid.component';
import { ServiceCategoryOverSeasTopUpComponent } from './components/service-category-over-seas-top-up/service-category-over-seas-top-up.component';
import { MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IndividualCashBackConfigurationListingComponent } from './individual-cash-back-configuration-listing/individual-cash-back-configuration-listing.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    IndividualCashBackConfigurationLayoutComponent,
    ServiceCategoryAllComponent,
    ServiceCategoryTopupComponent,
    ServiceCategoryGiftCardsComponent,
    ServiceCategoryDTHComponent,
    ServiceCategoryElectricityComponent,
    ServiceCategoryPostPaidComponent,
    ServiceCategoryOverSeasTopUpComponent,
    IndividualCashBackConfigurationListingComponent,
  ],
  imports: [
    CommonModule,
    IndividualCashBackConfigurationRoutingModule,
    MatSelectModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    CustomDataTableModule,
    MatRippleModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule
  ]
})
export class IndividualCashBackConfigurationModule { }
