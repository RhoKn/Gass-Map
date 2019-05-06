import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookiesService } from './cookies.service';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements CanActivate{

  constructor(
    private router:Router,
    private cookieS:CookiesService,
  ) { }

  canActivate():boolean{
    if(this.cookieS.checkCookie(global.cookiesDef.token)){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}



