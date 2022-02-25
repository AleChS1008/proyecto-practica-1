import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order.routing';
import { OrderComponent } from './order.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalOrderComponent } from './modal-order/modal-order.component';

@NgModule({
  declarations: [OrderComponent, ModalOrderComponent],
  imports: [
    CommonModule,
    SharedModule,
    OrderRoutingModule,
    ModalModule.forRoot()
  ]
})
export class OrderModule { }
