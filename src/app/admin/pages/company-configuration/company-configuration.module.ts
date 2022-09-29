import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CompanyConfigurationRoutingModule } from './company-configuration-routing.module';
import { CompanyConfigurationComponent } from './company-configuration/company-configuration.component';
import { CustomDataTableModule } from '../../components/custom-data-table/custom-data-table.module';
import { MatSelectModule } from '@angular/material/select';
import { MatRippleModule } from '@angular/material/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    CompanyConfigurationComponent
  ],
    imports: [
        CommonModule,
        MatTooltipModule,
        CompanyConfigurationRoutingModule,
        CustomDataTableModule,
        MatSelectModule,
        MatRippleModule,
        FormsModule,
        ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
        NgMultiSelectDropDownModule.forRoot(),
        MatToolbarModule
    ]
})
export class CompanyConfigurationModule { }