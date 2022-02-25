import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SignUpRoutingModule } from './sign-up.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignUpService } from './services/sign-up.service';



@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    SharedModule,
    SignUpRoutingModule,
    NgbModule
  ],
  providers: [SignUpService]
})
export class SignUpModule { }
