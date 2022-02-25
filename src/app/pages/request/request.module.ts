import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request.routing';
import { RequestComponent } from './request.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    RequestComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RequestRoutingModule
  ]
})
export class RequestModule { }
