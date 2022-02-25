import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  form = true
  constructor(private router : Router) {}

  ngOnInit(): void {
  }

  sendData (){
    this.form = false
    Swal.fire({
      title: 'Aprobado',
      html: '<h4 class="mb-0">¡Felicitaciones! Has sido aprobado</h4><span>Vamos a necesitar unos datos más.</span>',
      confirmButtonText: 'Siguiente',
      confirmButtonColor: '#fe9915',
      backdrop: false,
      customClass: {
        title:'titleSend',
        actions: 'mt-2',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(["/onboarding/monto_y_cuota"]);
      }
    })
  }

  Finish (){

  }
  }

