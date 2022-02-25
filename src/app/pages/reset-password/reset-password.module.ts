import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordRoutingModule } from './reset-password.routing';
import { ResetPasswordComponent } from './reset-password.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [
    CommonModule,
    SharedModule,
    ResetPasswordRoutingModule
  ]
})
export class ResetPasswordModule { }
