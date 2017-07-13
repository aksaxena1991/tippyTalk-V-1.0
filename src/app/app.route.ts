import {RouterModule, Routes} from "@angular/router";
import { ModuleWithProviders }  from '@angular/core';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ProfileComponent} from './components/profile/profile.component';


export const routes:Routes = [
    {
        path:'',component:LoginComponent
    },
    {
        path:'register',component:RegisterComponent
    },
    {
        path:'dashboard',component:DashboardComponent
    },
    {
        path:'profile',component:ProfileComponent
    },
    {
        path:'',
        redirectTo:'',
        pathMatch:'full'
    }
];


export const routing:ModuleWithProviders = RouterModule.forRoot(routes,{enableTracing:true});
