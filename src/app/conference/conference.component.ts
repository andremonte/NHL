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
      if (this.teams[i].conference === 'AFC') {
        this.AFCteams.push(this.teams[i]);
      }
      else {
        this.NFCteams.push(this.teams[i]);
      }
    }
  }

  sortAFCByName() {
    this.AFCteams.reverse();
  }

  sortNFCByName() {
    this.NFCteams.reverse();
  }

}
