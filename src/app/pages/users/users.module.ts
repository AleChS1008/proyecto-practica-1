import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users.routing';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalUsersComponent } from './modal-users/modal-users.component';


@NgModule({
  declarations: [UsersComponent, ModalUsersComponent],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,
    ModalModule.forRoot()
  ]
})
export class UsersModule { }
