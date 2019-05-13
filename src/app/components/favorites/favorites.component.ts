import { Component, OnInit } from '@angular/core';
import {RestService} from '../../rest.service';
import { HttpErrorResponse } from '@angular/common/http';
import { global } from '../../services/global';
import { AuxService } from '../../services/aux.service';
import { CookiesService } from '../../services/cookies.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  public requests: any = [];

  constructor(
    private rest:RestService,
    private auxS:AuxService,
    private cookieS:CookiesService
  ) { }

  ngOnInit() {
    const user = this.auxS.decodeToken(this.cookieS.getCookie(global.cookiesDef.token));
    this.rest.getAllObjects(global.uriRoutes.favorites + global.uriMethods.viewAll + '/' + user.sub).then(data => {
      if(data instanceof HttpErrorResponse){
        console.log(this.rest.httperrorHandling((data)).message);
      }else{
        console.log(data);
        this.requests = data.foundedFavs;
      }
    });
  }

  delFav(index){
    this.rest.deleteObject(global.uriRoutes.favorites + global.uriMethods.delete, this.requests[index]._id).then( data => {
      this.requests.splice(index,1);
    }
    );
  }

}

