import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor(
    private cookieService: CookieService
  ) { }

  /**
   * Metodo que setea una cookie.
   * 
   * @param name Llave que identifica a la cookie
   * @param value Valor que contiene la cookie
   */
  setCookie(name, value){
    this.cookieService.set( name, value );
  }

  /**
   * Metodo que devuelve la cookie especificada en caso de existir
   * @param name Llave que identifica a la cookie
   */
  getCookie(name){
    /**
     * @function this.checkCookie()
     */
    if(this.checkCookie(name)){
      return this.cookieService.get(name);
    }
    return null;
  }

  /**
   * Metodo que revisa si la cookie existe o no
   * @param name Llave que identifica a la cookie
   * @returns boolean
   */
  checkCookie(name){
    return this.cookieService.check(name);
  }

  /**
   * Metodo que devuelve todas cookies generadas
   * @returns array
   */
  getAllCookies(){
    return this.cookieService.getAll();
  }

  /**
   * Metodo que elimina la cookie especificada en caso de existir
   * @param name Llave que identifica a la cookie
   */
  deleteCookie(name){
    /**
     * @function this.checkCookie()
     */
    if(this.checkCookie(name)) {
      return this.cookieService.delete(name);
    }
  }

  /**
   * Metodo que elimina todas cookies generadas
   */
  deleteAllCookies(){
    return this.cookieService.deleteAll();
  }

}
