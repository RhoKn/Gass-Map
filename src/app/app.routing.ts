import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ListComponent } from './components/list/list.component';
import { AuthServiceService } from './services/auth-service.service';
import { FavoritesComponent } from './components/favorites/favorites.component';


const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: ListComponent, canActivate: [AuthServiceService]},
    {path: 'favorites', component: FavoritesComponent, canActivate: [AuthServiceService]},
    {path: 'login', component: LoginComponent},
    {path: '404', component: NotFoundComponent},
    {path: '**', component: NotFoundComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
