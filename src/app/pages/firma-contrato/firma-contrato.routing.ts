import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirmaContratoComponent } from './firma-contrato.component';

const routes: Routes = [
  {
    path: '', component: FirmaContratoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirmaContratoRoutingModule { }
