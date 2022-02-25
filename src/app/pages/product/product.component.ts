import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalProductComponent } from './modal-product/modal-product.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  modalRef: BsModalRef | any;

  constructor(
    private modalService : BsModalService,
  ) { }

  ngOnInit(): void {
  }

  openDetail(product: null) {
    this.openModal({item: product, view: true})
  }
  // openEdit(order: null) {
  //   this.openModal({item: order, edit: true})
  // }
  openCreate() {
    this.openModal({item: null, create: true})
  }

  openModal( data: {item: any, view?: boolean, create?: boolean, edit?: boolean} = {item: null, view: false, create: false, edit: false}) : void {
    this.modalRef = this.modalService.show(ModalProductComponent, Object.assign({
      initialState:  {
        product: data.item,
        view: data.view,
        create: data.create
      }
    }, {class: 'my-modal-sm'}))
  }
}
