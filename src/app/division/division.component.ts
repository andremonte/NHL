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
  isSort: boolean = true;

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

  sortById(AFC_NFC_teams) {
    if(AFC_NFC_teams[0].division === "North") {
      if(this.isSort) {
        this.north = AFC_NFC_teams.sort( (a, b) => {
          if(a.id > b.id) { return -1;}
          else if(a.id < b.id) { return 1;}
          else { return 0;}
        });
        this.isSort = false;
      }
      else {
        this.north = AFC_NFC_teams.sort( (a, b) => {
          if(a.id > b.id) { return 1;}
          else if(a.id < b.id) { return -1;}
          else { return 0;}
        });
        this.isSort = true;
      }
    }
    else if (AFC_NFC_teams[0].division === "South") {
      if(this.isSort) {
        this.south = AFC_NFC_teams.sort( (a, b) => {
          if(a.id > b.id) { return -1;}
          else if(a.id < b.id) { return 1;}
          else { return 0;}
        });
        this.isSort = false;
      }
      else {
        this.south = AFC_NFC_teams.sort( (a, b) => {
          if(a.id > b.id) { return 1;}
          else if(a.id < b.id) { return -1;}
          else { return 0;}
        });
        this.isSort = true;
      }
    }
    else if((AFC_NFC_teams[0].division === "East")) {
      if(this.isSort) {
        this.east = AFC_NFC_teams.sort( (a, b) => {
          if(a.id > b.id) { return -1;}
          else if(a.id < b.id) { return 1;}
          else { return 0;}
        });
        this.isSort = false;
      }
      else {
        this.east = AFC_NFC_teams.sort( (a, b) => {
          if(a.id > b.id) { return 1;}
          else if(a.id < b.id) { return -1;}
          else { return 0;}
        });
        this.isSort = true;
      }
    }
    else {
      if(this.isSort) {
        this.west = AFC_NFC_teams.sort( (a, b) => {
          if(a.id > b.id) { return -1;}
          else if(a.id < b.id) { return 1;}
          else { return 0;}
        });
        this.isSort = false;
      }
      else {
        this.west = AFC_NFC_teams.sort( (a, b) => {
          if(a.id > b.id) { return 1;}
          else if(a.id < b.id) { return -1;}
          else { return 0;}
        });
        this.isSort = true;
      }
    }
  }
  sortByName(AFC_NFC_teams) {
    if(AFC_NFC_teams[0].division == "North") {
      this.north.reverse();
    }
    else if (AFC_NFC_teams[0].division == "South"){
      this.south.reverse();
    }
    else if(AFC_NFC_teams[0].division == "East") {
      this.east.reverse();
    }
    else {
      this.west.reverse();
    }
  }

  sortByConference(AFC_NFC_teams) {
    if(AFC_NFC_teams[0].division === "North") {
      if(this.isSort) {
        this.north = AFC_NFC_teams.sort( (a, b) => {
          if(a.id > b.id) { return -1;}
          else if(a.id < b.id) { return 1;}
          else { return 0;}
        });
        this.isSort = false;
      }
      else {
        this.north = AFC_NFC_teams.sort( (a, b) => {
          if(a.id > b.id) { return 1;}
          else if(a.id < b.id) { return -1;}
          else { return 0;}
        });
        this.isSort = true;
      }
    }
    else if (AFC_NFC_teams[0].division === "South") {
      if(this.isSort) {
        this.south = AFC_NFC_teams.sort( (a, b) => {
          if(a.id > b.id) { return -1;}
          else if(a.id < b.id) { return 1;}
          else { return 0;}
        });
        this.isSort = false;
      }
      else {
        this.south = AFC_NFC_teams.sort( (a, b) => {
          if(a.id > b.id) { return 1;}
          else if(a.id < b.id) { return -1;}
          else { return 0;}
        });
        this.isSort = true;
      }
    }
    else if((AFC_NFC_teams[0].division === "East")) {
      if(this.isSort) {
        this.east = AFC_NFC_teams.sort( (a, b) => {
          if(a.id > b.id) { return -1;}
          else if(a.id < b.id) { return 1;}
          else { return 0;}
        });
        this.isSort = false;
      }
      else {
        this.east = AFC_NFC_teams.sort( (a, b) => {
          if(a.id > b.id) { return 1;}
          else if(a.id < b.id) { return -1;}
          else { return 0;}
        });
        this.isSort = true;
      }
    }
    else {
      if(this.isSort) {
        this.west = AFC_NFC_teams.sort( (a, b) => {
          if(a.id > b.id) { return -1;}
          else if(a.id < b.id) { return 1;}
          else { return 0;}
        });
        this.isSort = false;
      }
      else {
        this.west = AFC_NFC_teams.sort( (a, b) => {
          if(a.id > b.id) { return 1;}
          else if(a.id < b.id) { return -1;}
          else { return 0;}
        });
        this.isSort = true;
      }
    }
  }

}
