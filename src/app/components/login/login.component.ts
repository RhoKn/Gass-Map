import { Component, OnInit } from '@angular/core';
import {RestService} from '../../rest.service';
import { global } from '../../services/global';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CookiesService } from '../../services/cookies.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public logInMessage: string;
  public userToLog: any = {};
  constructor(
    private rest:RestService,
    private router:Router,
    private cookieS:CookiesService
  ) { }

  ngOnInit() {
    if(this.cookieS.checkCookie(global.cookiesDef.token)){
      this.router.navigate(['/home']);
    }
  }

  logIn(){
    this.userToLog.getToken = true;
    this.rest.loginUser(global.loginUri,this.userToLog).then(data => {
      if(data instanceof HttpErrorResponse){
        this.logInMessage = (this.rest.httperrorHandling((data)).message);
        console.log(this.rest.httperrorHandling(data));
      }else{
        this.cookieS.setCookie(global.cookiesDef.token,data.token);
        this.router.navigate(['/home']);
      }
    });
  }

}
