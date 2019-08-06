import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreOnBoardingRoutingModule } from './pre-on-boarding-routing.module';
import { PreOnBoardingComponent } from './pre-on-boarding.component';
import { PageHeaderModule } from './../../shared';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [PreOnBoardingComponent],
  imports: [
    CommonModule,
    PreOnBoardingRoutingModule,
    PageHeaderModule,
    DataTablesModule     
  ]
})
export class PreOnBoardingModule { }
