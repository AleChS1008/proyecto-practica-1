import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { FilesRoutingModule } from './files.routing';
import { FilesComponent } from './files.component';


@NgModule({
  declarations: [
    FilesComponent
  ],
  imports: [
    CommonModule,
    FilesRoutingModule,
    DragDropModule
  ]
})
export class FilesModule { }
