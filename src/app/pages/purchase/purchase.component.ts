import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalPurchaseComponent } from './modal-purchase/modal-purchase.component';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
  modalRef: BsModalRef | any;

  constructor(
    private modalService : BsModalService,
  ) { }

  ngOnInit(): void {
  }

  openDetail(purchase: null) {
    this.openModal({item: purchase, view: true})
  }
  // openEdit(purchase: null) {
  //   this.openModal({item: purchase, edit: true})
  // }
  openCreate() {
    this.openModal({item: null, create: true})
  }

  openModal( data: {item: any, view?: boolean, create?: boolean, edit?: boolean} = {item: null, view: false, create: false, edit: false}) : void {
    this.modalRef = this.modalService.show(ModalPurchaseComponent, Object.assign({
      initialState:  {
        purchase: data.item,
        view: data.view,
        create: data.create
      }
    }, {class: 'my-modal'}))
  }
}
