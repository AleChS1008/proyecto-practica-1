import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RequestLayoutRoutes } from './request-layouts.routing';


@NgModule({
  declarations: [


  ],
  imports: [
    RouterModule.forChild(RequestLayoutRoutes),
    CommonModule,
    HttpClientModule
  ]
})
export class RequestLayoutsModule { }
