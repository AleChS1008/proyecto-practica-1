import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseRoutingModule } from './purchase.routing';
import { PurchaseComponent } from './purchase.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalPurchaseComponent } from './modal-purchase/modal-purchase.component';


@NgModule({
  declarations: [
    PurchaseComponent,
    ModalPurchaseComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PurchaseRoutingModule,
    ModalModule.forRoot()
  ]
})
export class PurchaseModule { }
