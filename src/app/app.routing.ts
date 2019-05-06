import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ListComponent } from './components/list/list.component';
import { AuthServiceService } from './services/auth-service.service';
import { ListUsersComponent } from './components/user/list-users/list-users.component';
import { CreateUserComponent } from './components/user/create-user/create-user.component';

const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: ListComponent, canActivate: [AuthServiceService]},
    {path: 'users', component: ListUsersComponent, canActivate: [AuthServiceService]},
    {path: 'users/create', component: CreateUserComponent, canActivate: [AuthServiceService]},
    {path: 'login', component: LoginComponent},
    {path: '404', component: NotFoundComponent},
    {path: '**', component: NotFoundComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
