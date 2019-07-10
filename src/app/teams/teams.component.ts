import { TeamService } from './../Team/team.service';
import { Component, OnInit } from '@angular/core';
import { Team } from '../Team/team.model';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: Team[] = [];
  filteredTeams: Team[];

  constructor(private teamServ: TeamService) { }

  ngOnInit() {
    try {
      this.teamServ.getAllTeams()
        .subscribe(data => {
          { this.teams = data.results.data.team; /* console.log(data) */ }
          this.filteredTeams = data.teams;
        })
    }
    catch (err) {
      throw err;
    }
  }
  sortByName() {
    this.teams.reverse();
  }

}
