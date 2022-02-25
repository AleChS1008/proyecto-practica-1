import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-users',
  templateUrl: './modal-users.component.html',
  styleUrls: ['./modal-users.component.scss']
})
export class ModalUsersComponent implements OnInit {
  @Input() users
  @Input() create
  @Input() edit

  constructor(
    public bsModalRef: BsModalRef,
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.bsModalRef.hide();
  }
}
