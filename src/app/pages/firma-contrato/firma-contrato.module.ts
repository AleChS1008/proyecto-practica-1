import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirmaContratoRoutingModule } from './firma-contrato.routing';
import { FirmaContratoComponent } from './firma-contrato.component';


@NgModule({
  declarations: [
    FirmaContratoComponent
  ],
  imports: [
    CommonModule,
    FirmaContratoRoutingModule
  ]
})
export class FirmaContratoModule { }
