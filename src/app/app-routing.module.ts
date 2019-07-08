import { DivisionComponent } from './division/division.component';
import { ConferenceComponent } from './conference/conference.component';
import { TeamsComponent } from './teams/teams.component';
import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path:'teams', component: TeamsComponent},
  { path: 'conference', component: ConferenceComponent },
  { path: 'division', component: DivisionComponent },
/*   { path:'', redirectTo:'/home', pathMatch: 'full'}, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
