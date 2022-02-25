import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignUpService } from './services/sign-up.service';
import { userR } from 'src/app/shared/models/users.model';
import { Router } from '@angular/router';
import { MyValidations } from 'src/app/shared/myValidations/myValidations';
import Swal from 'sweetalert2';
declare var $: any

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  view = false;
  view2 = false
  formUsers: FormGroup | any;

  constructor(
    private signUpService: SignUpService,
    private router: Router,
  ) {  }

  ngOnInit(): void {
    this.initformUsers()
  }

  initformUsers(){
    this.formUsers = new FormGroup({
      email: new FormControl('',[ Validators.required, Validators.pattern(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
      confirmPassword: new FormControl('', [Validators.required, MyValidations.sameVal($('#pass1'))]),
      fullname: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.required),
      role_id: new FormControl(2)
    });
  }

  createU(form: userR){
    if(this.formUsers.invalid){
      this.formUsers.markAllAsTouched()
      return
    }
    this.signUpService.postUsers(form).toPromise().then(data =>{
      this.router.navigate(['/auth/sign-in']);
      setTimeout(function(){
        Swal.fire({
          position: 'top-right',
          title: 'Hecho!',
          text: 'Usuario registrado',
          showConfirmButton: false,
          backdrop: false,
          width: 300,
          timer: 2000,
          customClass: {
            title: 'title-done',
            htmlContainer:'content-alert'
          }
        })
      }, 100)
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



}

