import { TeamService } from './Team/team.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConferenceComponent } from './conference/conference.component';
import { DivisionComponent } from './division/division.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    TeamsComponent,
    ConferenceComponent,
    DivisionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
