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
  id: Team[] = [];
  filteredTeams: Team[];

  constructor(private teamServ: TeamService) { }

  ngOnInit() {
    try {
      this.teamServ.getAllTeams()
        .subscribe(data => {
          { this.teams = data.results.data.team; /* console.log(data) */ }
          this.filteredTeams = data.results.data.team;
        })
    }
    catch (err) {
      throw err;
    }
  }
  sortByName() {
    this.filteredTeams.reverse();
  }

/*   sortById() {
    this.id = this.filteredTeams.sort((a, b) => Number(a.id) - Number(b.id));
  } */

  removeDarkLine() {
    var line = document.getElementById('dark');

    if (line.className.match('dark')) {
      line.classList.remove('dark');
    }
    else {
      line.classList.add('dark');
    }
  }

  searchTeam(event: any) {
    this.filteredTeams = this.teams.filter((value) => {
      return value.display_name.toLowerCase().includes(event.target.value.toLowerCase())
        || value.nickname.toLowerCase().includes(event.target.value.toLowerCase());
    })
  }

  searchConference(event: any) {
    this.filteredTeams = this.teams.filter((value) => {
      return value.conference.toLowerCase().includes(event.target.value.toLowerCase());
    })
  }

  searchDivision(event: any) {
    this.filteredTeams = this.teams.filter((value) => {
      return value.division.toLowerCase().includes(event.target.value.toLowerCase());
    })
  }

}
