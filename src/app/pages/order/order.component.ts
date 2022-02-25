import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalOrderComponent } from './modal-order/modal-order.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  modalRef: BsModalRef | any;

  constructor(
    private modalService : BsModalService,
  ) { }

  ngOnInit(): void {

  }


  openDetail(order: null) {
    this.openModal({item: order, view: true})
  }
  openEdit(order: null) {
    this.openModal({item: order, edit: true})
  }
  openCreate() {
    this.openModal({item: null, create: true})
  }

  openModal( data: {item: any, view?: boolean, create?: boolean, edit?: boolean} = {item: null, view: false, create: false, edit: false}) : void {
    this.modalRef = this.modalService.show(ModalOrderComponent, Object.assign({
      initialState:  {
        order: data.item,
        view: data.view,
        edit: data.edit,
        create: data.create
      }
    }, {class: 'my-modal'}))
  }
}
