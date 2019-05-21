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
  public favs: any =[];
  public auxArr: any=[];
  
  constructor(
    private rest:RestService,
    private cookieS:CookiesService,
    private auxS:AuxService
  ) { }

  ngOnInit() {
    const user = this.auxS.decodeToken(this.cookieS.getCookie(global.cookiesDef.token));
    this.rest.getAllObjects(global.uriRoutes.favorites + global.uriMethods.viewAll + '/' + user.sub).then(data => {
      if(data instanceof HttpErrorResponse){
        console.log(this.rest.httperrorHandling((data)).message);
      }else{
        this.favs = data.foundedFavs;
        console.log(this.favs);
        this.rest.getAllObjects(global.uriRoutes.gasStations+global.uriMethods.viewAllBdGas).then(gasS => {
          if(gasS instanceof HttpErrorResponse){
            console.log(this.rest.httperrorHandling((gasS)).message);
          }else{
            this.requests = gasS.gas;
            console.log(this.requests)
            for (let index = 0; index < this.favs.length; index++) {
              for (let counter = 0; counter < this.requests.length; counter++) {
                if(this.favs[index].gasolinera._id === this.requests[counter]._id){
                  this.auxArr.push(counter);
                  break;
                }
              }
            }
            this.auxArr.forEach(element => {
              this.requests.splice(element,1);
            });
          }
        });
      }
    });
  }

  addToFavorite(gas){
    const user = this.auxS.decodeToken(this.cookieS.getCookie(global.cookiesDef.token));
    const newObj = {
      gasolinera: this.requests[gas]._id,
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
