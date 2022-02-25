import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
declare var $: any

@Component({
  selector: 'app-modal-purchase',
  templateUrl: './modal-purchase.component.html',
  styleUrls: ['./modal-purchase.component.scss']
})
export class ModalPurchaseComponent implements OnInit {
  @Input() purchase
  @Input() view
  @Input() create

  constructor(
  public bsModalRef: BsModalRef,
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.bsModalRef.hide();
  }

  imgCreated = false
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      this.imgCreated = true
      const file = event.target.files[0];
      const imgURL = URL.createObjectURL(file);
      setTimeout(() => {
        $('#imgCreate').attr('src', imgURL)
      }, 10);
    }
  }
}
