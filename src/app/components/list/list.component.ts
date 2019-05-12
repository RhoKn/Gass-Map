import { Component, OnInit } from '@angular/core';
import {RestService} from '../../rest.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CookiesService } from '../../services/cookies.service';
import { global } from '../../services/global';
import { AuxService } from '../../services/aux.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public requests: any = [];
  constructor(
    private rest:RestService,
    private cookieS:CookiesService,
    private auxS:AuxService
  ) { }

  ngOnInit() {
    this.rest.getApiObjects().then(data => {
      if(data instanceof HttpErrorResponse){
        console.log(this.rest.httperrorHandling((data)).message);
      }else{
        console.log(data);
        let numeroRegex = /\No\.+.+[0-9]+/;
        let coloniaRegex = /\Col+[^a-np-z]+.+/;
        let calleRegex = /\No\.+.+[0-9]+.+/;

        let colonia;
        let numero;
        let calle;
        let ciudad;

        data.results.forEach(element => {

          element.colonia = element.calle.replace(calleRegex, "");

          numero = numeroRegex.exec(data.calle);

          if(!numero){
            numero = "S/N";
          }
          
          numero = numero.toString();

          colonia = calleRegex.exec(data.calle);

          if(!colonia){
            colonia = "Not Available";
          }else{
            colonia = colonia.toString();
            colonia = colonia.replace(numeroRegex, "");
            colonia = colonia.replace("  ", "");
          }

          if(colonia == "Not Available"){
            if(coloniaRegex.test(data.calle)){
              colonia = coloniaRegex.exec(data.calle);
              colonia = colonia.toString();

              calle = calle.replace(colonia, "");
            }
          }

        });
        this.requests = data.results;
      }
    });
  }

  addToFavorite(gas){
    const user = this.auxS.decodeToken(this.cookieS.getCookie(global.cookiesDef.token));
    const newObj = {
      gasolinera: this.requests[gas].calle,
      user : user.sub
    };
    
    this.rest.createObject(global.uriRoutes.favorites + global.uriMethods.create,newObj).then(data => {
      if(data instanceof HttpErrorResponse){
        console.log(this.rest.httperrorHandling((data)).message);
      }else{
        this.requests.splice(gas,1);
      }
    });
    console.log(this.requests[gas]);
  }

}
