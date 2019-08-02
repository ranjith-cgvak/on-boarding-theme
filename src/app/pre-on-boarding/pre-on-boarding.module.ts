import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreOnBoardingRoutingModule } from './pre-on-boarding-routing.module';
import { PreOnBoardingComponent } from './pre-on-boarding.component';

@NgModule({
  declarations: [PreOnBoardingComponent],
  imports: [
    CommonModule,
    PreOnBoardingRoutingModule
  ]
})
export class PreOnBoardingModule { }
