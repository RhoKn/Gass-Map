import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuxService {
  private jstHelper = new JwtHelperService();

  constructor() {
    
   }

  decodeToken(token){
    return this.jstHelper.decodeToken(token);
  }
}
