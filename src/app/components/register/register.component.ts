import { Component, OnInit } from '@angular/core';
import { global } from '../../services/global';
import { AuxService } from '../../services/aux.service';
import { CookiesService } from '../../services/cookies.service';
import {RestService} from '../../rest.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public redirectMessage: string;
  public userToLog:any = {};

  constructor(
    private rest:RestService,
    private auxS:AuxService,
    private router:Router,
    private cookieS:CookiesService
  ) { }

  ngOnInit() {
    this.cookieS.deleteCookie(global.cookiesDef.token);
  }


  registerU(){
    this.userToLog.user_type = 'true';
    console.log(this.userToLog)
    this.rest.createObject(global.createUserUri,this.userToLog).then(data => {
      if(data instanceof HttpErrorResponse){
        this.redirectMessage = (this.rest.httperrorHandling((data)).message);
        console.log(this.rest.httperrorHandling(data));
      }else{
        this.redirectMessage = 'Registro Exitoso!\nSeras redireccionado al inicio de sesión.';
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 6000);
      }
    });
  }
}
