import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client.routing';
import { ClientComponent } from './client.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ClientComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClientRoutingModule,
  ]
})
export class ClientModule { }
