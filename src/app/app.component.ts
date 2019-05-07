import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';
import { CookiesService } from './services/cookies.service';
import { global } from './services/global';
import { AuxService } from './services/aux.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  private isNameSet: boolean;
  private changes:  number;
  private user:any = {};
  private firstLog;
  private secondEvent;
  constructor(
    private router: Router,
    private cookieS:CookiesService,
    private auxS:AuxService
  ) {
    this.isNameSet = false;
    this.changes =0;
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.checkSecuende(event);
      }
  });
  }
    ngOnInit() {   
      if(!this.isNameSet){
        this.setUserStats();
      }
    }
    
    checkSecuende(event){
      if(this.changes == 0 && event.url == "/login"){
        this.changes++;
        this.firstLog = event.url;
      }else if( event.url=="/home" && this.changes == 1){
        if(!this.isNameSet){
          this.setUserStats();
        }
      } else{
        this.changes = 0;
      }
    }

    setUserStats(){
      this.user = this.auxS.decodeToken(this.cookieS.getCookie(global.cookiesDef.token));
    }

    logOut(){
      this.cookieS.deleteCookie(global.cookiesDef.token);
      this.router.navigate(['/login']);
    }
}
