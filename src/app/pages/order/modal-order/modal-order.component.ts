import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
declare var $: any

@Component({
  selector: 'app-modal-order',
  templateUrl: './modal-order.component.html',
  styleUrls: ['./modal-order.component.scss']
})
export class ModalOrderComponent implements OnInit {
  @Input() order
  @Input() view
  @Input() edit
  @Input() create
  modilfy = false
  new = false

  constructor(
    public bsModalRef: BsModalRef,
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.bsModalRef.hide();
  }
}
