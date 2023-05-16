import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { FootballComponent } from './components/football/football.component';
import {HttpClientModule} from '@angular/common/http';
import { SubmenuComponent } from './components/submenu/submenu.component';
const appRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'football', component:FootballComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    FootballComponent,
    SubmenuComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgFor,
    NgForOf,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
