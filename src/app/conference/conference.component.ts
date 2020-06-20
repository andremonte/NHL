import { Team } from './../Team/team.model';
import { TeamService } from './../Team/team.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.css']
})
export class ConferenceComponent implements OnInit {
  teams: Team[] = [];
  getTeamSub;
  AFCteams: Team[] = [];
  NFCteams: Team[] = [];
  isSort: boolean = true;

  constructor(private teamServ: TeamService) { }

  ngOnInit() {
    try {
      this.getTeamSub = this.teamServ.getAllTeams()
        .subscribe(data => {
          { this.teams = data.results.data.team; this.getConference(); console.log(data) }
        })
    }
    catch (err) {
      throw err;
    }
  }

  getConference() {
    for (let i = 0; i < this.teams.length; i++) {
      if (this.teams[i].conference === "American Football Conference") {
        this.AFCteams.push(this.teams[i]);
      }
      else {
        this.NFCteams.push(this.teams[i]);
      }
    }
  }
  sortById(AFC_NFC_teams) {
    if(AFC_NFC_teams[0].conference === "American Football Conference") {
      if(this.isSort) {
        this.AFCteams = AFC_NFC_teams.sort( (a, b) => {
          if(a.id > b.id) { return -1;}
          else if(a.id < b.id) { return 1;}
          else { return 0;}
        });
        this.isSort = false;
      }
      else {
        this.AFCteams = AFC_NFC_teams.sort( (a, b) => {
          if(a.id > b.id) { return 1;}
          else if(a.id < b.id) { return -1;}
          else { return 0;}
        });
        this.isSort = true;
      }
    }
    else {
      if(this.isSort) {
        this.NFCteams = AFC_NFC_teams.sort( (a, b) => {
          if(a.id > b.id) { return -1;}
          else if(a.id < b.id) { return 1;}
          else { return 0;}
        });
        this.isSort = false;
      }
      else {
        this.NFCteams = AFC_NFC_teams.sort( (a, b) => {
          if(a.id > b.id) { return 1;}
          else if(a.id < b.id) { return -1;}
          else { return 0;}
        });
        this.isSort = true;
      }
    }
  }
  sortByName(AFC_NFC_teams) {
    if(AFC_NFC_teams[0].conference == "American Football Conference") {
      this.AFCteams.reverse();
    }
    else {
      this.NFCteams.reverse();
    }
  }

  sortByDivision(AFC_NFC_teams) {
    if(AFC_NFC_teams[0].conference === "American Football Conference") {
      if(this.isSort) {
        this.AFCteams = AFC_NFC_teams.sort( (a, b) => {
          if(a.division > b.division) { return -1;}
          else if(a.division < b.division) { return 1;}
          else { return 0;}
        });
        this.isSort = false;
      }
      else {
        this.AFCteams = AFC_NFC_teams.sort( (a, b) => {
          if(a.division > b.division) { return 1;}
          else if(a.division < b.division) { return -1;}
          else { return 0;}
        });
        this.isSort = true;
      }
    }
    else {
      if(this.isSort) {
        this.NFCteams = AFC_NFC_teams.sort( (a, b) => {
          if(a.division > b.division) { return -1;}
          else if(a.division < b.division) { return 1;}
          else { return 0;}
        });
        this.isSort = false;
      }
      else {
        this.NFCteams = AFC_NFC_teams.sort( (a, b) => {
          if(a.division > b.division) { return 1;}
          else if(a.division < b.division) { return -1;}
          else { return 0;}
        });
        this.isSort = true;
      }
    }
  }

}
