import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { NgxSpinnerModule } from 'ngx-spinner';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ListComponent } from './components/list/list.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { RegisterComponent } from './components/register/register.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { GasComponent } from './components/gas/gas.component';
import { AgmCoreModule } from '@agm/core';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    ListComponent,
    FavoritesComponent,
    RegisterComponent,
    ListUsersComponent,
    GasComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpClientModule,
    NgbModule,
    NgxSpinnerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC8xnywTtZ7TX7poO3XKX1OazpnupqQQ7s'
    })
  ],
  providers: [
    CookieService,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
