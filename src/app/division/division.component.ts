import { Component, OnInit } from '@angular/core';
import { Team } from './../Team/team.model';
import { TeamService } from './../Team/team.service';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {

  teams: Team[] = [];
  AFCteams: Team[] = [];
  NFCteams: Team[] = [];
  north: Team[] = [];
  south: Team[] = [];
  east: Team[] = [];
  west: Team[] = [];
  constructor(private teamServ: TeamService) { }

  ngOnInit() {
    try {
      this.teamServ.getAllTeams()
        .subscribe(data => {
          { this.teams = data.results.data.team; this.getConference(); this.getDivision(); console.log(data) }
        })
    }
    catch (err) {
      throw err;
    }
  }

  getConference() {
    for (let i = 0; i < this.teams.length; i++) {
      if (this.teams[i].conference === 'AFC') {
        this.AFCteams.push(this.teams[i]);
      }
      else {
        this.NFCteams.push(this.teams[i]);
      }
    }
  }

  getDivision() {
    for (let i = 0; i < this.teams.length; i++) {
      if (this.teams[i].division === 'North') {
        this.north.push(this.teams[i]);
      }
      else if (this.teams[i].division === 'South') {
        this.south.push(this.teams[i]);
      }
      else if (this.teams[i].division === 'East') {
        this.east.push(this.teams[i]);
      }
      else {
        this.west.push(this.teams[i]);
      }
    }
  }

}
