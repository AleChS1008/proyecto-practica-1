import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountRoutingModule } from './my-account.routing';
import { MyAccountComponent } from './my-account.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [MyAccountComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    MyAccountRoutingModule
  ]
})
export class MyAccountModule { }
