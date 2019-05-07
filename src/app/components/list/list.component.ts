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
        console.log(data);
      }
    });
    console.log(this.requests[gas]);
  }

}
