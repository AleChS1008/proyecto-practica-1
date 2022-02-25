import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  form = true

  nuevo = ['f', 'g', 'h',]
  autenticacion_fallida = ['a', 'b', 'c']
  cuenta_Abierta = ['k', 'l']
  desetimado = ['i', 'j']
  contactado = ['d']


  constructor() { }

  ngOnInit(): void {
  }

  changeView (){
    if (this.form){
      this.form = false
    }else {
      this.form = true
    }
  }

  drop(event) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
