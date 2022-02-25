import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalUsersComponent } from './modal-users/modal-users.component';
import { from } from 'rxjs';
declare var $: any

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  modalRef: BsModalRef | any;
  form = true

  constructor(
    private modalService : BsModalService,
  ) { }

  ngOnInit(): void {
  }

  // openDetail(producto: Producto) {
  //   this.openModal({item: producto, view: true})
  // }
  openEdit() {
    this.openModal({item: null, edit: true})
  }
  openCreate() {
    this.openModal({item: null, create: true})
  }

  openModal( data: {item: any, view?: boolean, edit?: boolean, create?: boolean} = {item: null, view: false, edit: false, create: false}) : void {
    this.modalRef = this.modalService.show(ModalUsersComponent, Object.assign({
      initialState:  {
        users: data.item,
        create: data.create,
        edit: data.edit,
      }
    }, {class: 'my-modal'}))
  }
  // deleteP(id){
  //   this.productoService.deleteProductos(id).subscribe(data =>{
  //     // console.log(data)
  //     this.router.navigateByUrl('', {skipLocationChange: true}).then(()=>
  //     this.router.navigate(["dash/productos"]));
  //   })
  // }

    changeBtn(){
      if(this.form){
        this.form = false
      }else{
        this.form = true
      }
    }
}
