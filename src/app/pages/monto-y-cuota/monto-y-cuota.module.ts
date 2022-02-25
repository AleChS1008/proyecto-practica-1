import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MontoYCuotaRoutingModule } from './monto-y-cuota.routing';
import { MontoYCuotaComponent } from './monto-y-cuota.component';


@NgModule({
  declarations: [
    MontoYCuotaComponent
  ],
  imports: [
    CommonModule,
    MontoYCuotaRoutingModule
  ]
})
export class MontoYCuotaModule { }
