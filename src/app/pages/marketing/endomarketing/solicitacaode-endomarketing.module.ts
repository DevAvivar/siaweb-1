import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitacaodeEndomarketingRoutingModule } from './solicitacaode-endomarketing-routing.module';
import { SolicitacaodeEndomarketingComponent } from './solicitacaode-endomarketing.component';


@NgModule({
  declarations: [
    SolicitacaodeEndomarketingComponent
  ],
  imports: [
    CommonModule,
    SolicitacaodeEndomarketingRoutingModule
  ]
})
export class SolicitacaodeEndomarketingModule { }
