import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product.routing';
import { ProductComponent } from './product.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalProductComponent } from './modal-product/modal-product.component';


@NgModule({
  declarations: [
    ProductComponent,
    ModalProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule,
    ModalModule.forRoot()
  ]
})
export class ProductModule { }
