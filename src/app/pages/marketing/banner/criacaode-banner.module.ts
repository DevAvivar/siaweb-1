import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CriacaodeBannerRoutingModule } from './criacaode-banner-routing.module';
import { CriacaodeBannerComponent } from './criacaode-banner.component';


@NgModule({
  declarations: [
    CriacaodeBannerComponent
  ],
  imports: [
    CommonModule,
    CriacaodeBannerRoutingModule
  ]
})
export class CriacaodeBannerModule { }
