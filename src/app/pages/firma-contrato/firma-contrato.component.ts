import { Component, OnInit } from '@angular/core';
declare var $ : any

@Component({
  selector: 'app-firma-contrato',
  templateUrl: './firma-contrato.component.html',
  styleUrls: ['./firma-contrato.component.scss']
})
export class FirmaContratoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let miCanvas:any = document.querySelector('#canvas');
    let lineas:any = [];
    let correccionX = 0;
    let correccionY = 0;
    let pintarLinea = false;
    let nuevaPosicionX = 0;
    let nuevaPosicionY = 0;
    let posicion = miCanvas.getBoundingClientRect()
    correccionX = posicion.x;
    correccionY = posicion.y;
    miCanvas.width = $('.cnt-canvas').width()

    function empezarDibujo() {
      pintarLinea = true;
      lineas.push([]);
    };

    function guardarLinea() {
      if(lineas.length > 0){
        lineas[lineas.length - 1].push({
          x: nuevaPosicionX,
          y: nuevaPosicionY
        });
      }
    }

    function dibujarLinea(event) {
      event.preventDefault();
      if (pintarLinea) {
          let ctx = miCanvas.getContext('2d')
          ctx.lineJoin = ctx.lineCap = 'round';
          ctx.lineWidth = 1;
          ctx.strokeStyle = '#000';
          if (event.changedTouches == undefined) {
              nuevaPosicionX = event.layerX;
              nuevaPosicionY = event.layerY;
          } else {
              nuevaPosicionX = event.changedTouches[0].pageX - correccionX;
              nuevaPosicionY = event.changedTouches[0].pageY - correccionY;
          }
          guardarLinea();
          ctx.beginPath();
          lineas.forEach(function (segmento) {
              ctx.moveTo(segmento[0].x, segmento[0].y);
              segmento.forEach(function (punto, index) {
                  ctx.lineTo(punto.x, punto.y);
              });
          });
          ctx.stroke();
      }
    }

    function pararDibujar () {
      pintarLinea = false;
      guardarLinea();
    }
    function resizeCanvas(){
      $('#canvas').removeAttr('width')
      $('#canvas').attr('width', $('.cnt-canvas').width())
    }

    $(window).resize(resizeCanvas)
    miCanvas.addEventListener('mousedown', empezarDibujo);
    miCanvas.addEventListener('mousemove', dibujarLinea);
    window.addEventListener('mouseup', pararDibujar);
    miCanvas.addEventListener('touchstart', empezarDibujo);
    miCanvas.addEventListener('touchmove', dibujarLinea);
    $('.btn-danger').click( function(){
      lineas = []
      resizeCanvas()
    })
  }

  deleteCanva(){}

}
