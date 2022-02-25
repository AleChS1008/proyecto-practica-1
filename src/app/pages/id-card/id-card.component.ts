import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import Swal from 'sweetalert2';
declare var $ : any


@Component({
  selector: 'app-id-card',
  templateUrl: './id-card.component.html',
  styleUrls: ['./id-card.component.scss']
})
export class IdCardComponent implements OnInit {
  form = true
  camera = false

  constructor() { }

  ngOnInit(): void {
  }

  openCamera(){
    navigator.mediaDevices.getUserMedia({audio: false, video: true}).then( stream => {
      this.camera = true
      setTimeout(() =>{
        $('#video')[0].srcObject = stream
      }, 10);
    }).catch(error => {
      alert('Se deben otorgar permisos para usar la camara')
    })
  }

  img1
  img2
  img3
  capPhoto(event?){
    setTimeout(() => {
      this.camera = false
    },100);
    if($('#video')[0]) $('#video')[0].srcObject.getVideoTracks()[0].stop;
    if(event && event.target.files.length > 0){
      var file = event.target.files[0];
      if(!this.img1){
        this.img1 = file
      }else if(!this.img2){
        this.img2 = file
      }else{
        this.img3 = file
        this.sendData()
      }
    }else{
      $('#canvas')[0].getContext('2d').drawImage($('#video')[0], 0, 0);
      $('#canvas')[0].toBlob((blob) => {
        if(!this.img1){
          this.img1 = new File([blob], 'img.jpg', blob)
        }else if(!this.img2){
          this.img2 = new File([blob], 'img.jpg', blob)
        }else{
          this.img3 = new File([blob], 'img.jpg', blob)
          this.sendData()
        }
      });
    }
  }

  sendData (){
    this.form = false
    Swal.fire({
      title: 'Felicitaciones',
      text: 'En breve nos comunicaremos contigo luego de verificar que todo esta bien y para confirmar las condiciones de tu credito.',
      confirmButtonText: 'Listo',
      confirmButtonColor: '#fe9915',
      backdrop: false,
      customClass: {
        title:'titleSend',
        actions: 'mt-2',
      },


    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/onboarding";
      }
    })
  }

  Finish (){

  }
  }



