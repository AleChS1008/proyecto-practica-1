import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdCardComponent } from './id-card.component';

const routes: Routes = [
  {
    path: '', component: IdCardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdCardRoutingModule { }
