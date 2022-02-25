import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MontoYCuotaComponent } from './monto-y-cuota.component';

const routes: Routes = [
  {
  path:'', component: MontoYCuotaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MontoYCuotaRoutingModule { }
