import { TeamService } from './../Team/team.service';
import { Component, OnInit } from '@angular/core';
import { Team } from '../Team/team.model';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { LiteralMapEntry } from '@angular/compiler/src/output/output_ast';

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
    this.teams.reverse();
  }

  sortById() {
/*     let min = 39;
    for(let i = 0; i < this.teams.length; i++) {
      if(+this.teams[i].id >= min) {
        this.id.push()
      }
    } */
  }

  removeDarkLine() {
    var line = document.getElementById('dark');

    if(line.className.match('dark')) {
      line.classList.remove('dark');
    }
    else { line.classList.add('dark');
    }
  }

  searchTeam(event: any) {
    this.filteredTeams = this.teams.filter((value) => {
      return value.display_name.toLowerCase().includes(event.target.value.toLowerCase())
      || value.nickname.toLowerCase().includes(event.target.value.toLowerCase());
    })
  }

}
