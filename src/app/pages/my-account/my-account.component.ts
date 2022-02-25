import { Component, OnInit } from '@angular/core';
import { User, userR } from 'src/app/shared/models/users.model';
import { Router } from '@angular/router';
import { SignUpService } from '../sign-up/services/sign-up.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
declare var $: any

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  formUser: FormGroup | any;
  user: User | any = [];

  constructor(
    private signUpService: SignUpService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.getUser()
    this.initformUser()
  }

  initformUser(){
    this.formUser = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(36)]),
      newpassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(36)])
    });
  }

  checkVal(){
    $('.inputR').on('keyup', function() {
      if($("#pass2").val() != ''){
        if($('#pass').val() != $('#pass2').val()){
          $('#err').show()
          return
        } else{
          $('#err').hide()
        }
      }
    })
  }

  view = true

  editU(form: userR, id){
    this.formUser.controls['newpassword'].markAsTouched()
    if( $("#pass").val() != undefined){
      if($("#pass").val().length < 6){
        return
      }
    }
    if($('#pass').val() != $('#pass2').val()){
      $('#err').show()
      return
    } else{
      $('#err').hide()
    }
    this.signUpService.putUsers(form, id).toPromise().then(data =>{
      // console.log(data)
      this.view = true
      this.router.navigateByUrl('', {skipLocationChange: true}).then(()=>
      this.router.navigate(["dash/mi-cuenta"]));
      Swal.fire({
        position: 'top-right',
        title: 'Hecho!',
        text: 'Datos Guardados exitosamente',
        showConfirmButton: false,
        backdrop: false,
        width: 300,
        timer: 2000,
        customClass: {
          title: 'title-done',
          htmlContainer:'content-alert'
        }
      })
    }).catch(error =>{
      error.error.statusCode == 400? Swal.fire({
        position: 'top-right',
        title: 'Error',
        text: error.error.message,
        showConfirmButton: false,
        backdrop: false,
        width: 300,
        timer: 2000,
        customClass: {
          title: 'title-alert',
          htmlContainer:'content-alert'
        }
      }): null
    })
  }

  reset(){
    this.formUser.controls['password'].reset()
    this.formUser.controls['newpassword'].reset()
  }
  resetForm(){
    const use = {
      ...this.user,
      password: null,
      newpassword: null
    }
     this.formUser.patchValue(use)
  }


  getUser(){
    var data:any = sessionStorage.getItem(('userData'));
    var dataUser = JSON.parse(data)
    this.signUpService.getUsersById(dataUser.id).subscribe(data  => {
       var  body: any = data.body
       this.user = body
       const use = {
        ...this.user,
        password: null
      }
       this.formUser.patchValue(use)
     })
   }



}
