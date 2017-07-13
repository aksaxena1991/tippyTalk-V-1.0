
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing} from './app.route';
import {AngularFireModule} from 'angularfire2';
import { AppComponent } from './app.component';
import {LoginComponent} from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {RegisterComponent} from './components/register/register.component';
import {TopbarComponent} from './components/minorComponents/topBar/topbar.component';
import {SidebarComponent} from './components/minorComponents/sideBar/sidebar.component';

import { ChartsModule } from 'ng2-charts';

import {ProfileComponent} from './components/profile/profile.component';
import {BreadcrumComponent} from './components/minorComponents/breadcrum/breadcrum.component';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    TopbarComponent,
    DashboardComponent,
    BreadcrumComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    routing,
    MyDateRangePickerModule ,
    ChartsModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
