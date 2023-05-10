import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { FootballComponent } from './components/football/football.component';
import {HttpClient} from '@angular/common/http';
const appRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'football', component:FootballComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NavComponent,
    FooterComponent,
    FootballComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
