import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SwiperModule } from 'swiper/angular';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NextDirective } from './next.directive';
import { PrevDirective } from './prev.directive';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    DashboardComponent,
    NextDirective,
    PrevDirective,

  ],
  imports: [

    CommonModule,
    DashboardRoutingModule,
    SwiperModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule
  ]
})
export class DashboardModule { }
