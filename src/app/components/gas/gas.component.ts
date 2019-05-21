import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {RestService} from '../../rest.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CookiesService } from '../../services/cookies.service';
import { global } from '../../services/global';
import { AuxService } from '../../services/aux.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-gas',
  templateUrl: './gas.component.html',
  styleUrls: ['./gas.component.css']
})
export class GasComponent implements OnInit {

  public theGas: any = {};
  public comments: any = [];
  public com:any = {};
  public texto : string = 'Wenceslau Braz - Cuidado com as cargas';
  public lat: number;
  public lng: number;
  public zoom: number = 15;
  public showMap = false;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private rest:RestService,
    private cookieS:CookiesService,
    private auxS:AuxService,
    private refChange: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.rest.getObject(global.uriRoutes.gasStations + global.uriMethods.viewOne,this.route.snapshot.params['id']).then(data =>{
      const gasTitle = document.getElementById('GasStreet') as HTMLTitleElement;
      const gasStreet = document.getElementById('street') as HTMLTitleElement;
      this.theGas = data.gas;
      gasTitle.innerText = `${this.theGas.razonsocial} - C.P: ${this.theGas.postal_code}`;
      gasStreet.innerText = `${this.theGas.street} ${this.theGas.number !== 'S/N' ? this.theGas.number : ''} ${this.theGas.colony !== 'Not Available' ? this.theGas.colony : ''}`;
      this.lat = this.theGas.latitude.split('').splice(0,1).toString();
      this.lng = this.theGas.longitude.split('').splice(0,1).toString();;
      this.showMap = true;
      console.log(this.theGas);
    });
    this.rest.getAllObjects(`${global.uriRoutes.comments}${global.uriMethods.viewAll}/${this.route.snapshot.params['id']}`).then(data=>{
      if(data instanceof HttpErrorResponse){
        console.log(this.rest.httperrorHandling(data));
        this.comments= [];
      }else{
        
        this.comments = data.foundedComments;
        console.log(this.comments)
      }
    });
    
  }
  createCom(){
    if(this.com.text && this.com.text.length > 0){
      this.com.gasolinera = this.route.snapshot.params['id'];
      this.com.user = (this.auxS.decodeToken(this.cookieS.getCookie(global.cookiesDef.token))).sub;
      this.rest.createObject(`${global.uriRoutes.comments}${global.uriMethods.create}`,this.com).then(data =>{
        if(data instanceof HttpErrorResponse){
          console.log(this.rest.httperrorHandling(data));
        }else{
          this.router.navigate(['/gas/'+this.route.snapshot.params['id']],{
            queryParams: {refresh: new Date().getTime()}
         });
        }
      });
    }else{
      console.log('No se ha insertado texto')
    }
  }

}