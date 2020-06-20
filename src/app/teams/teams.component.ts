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
  isSort: boolean = true;
  constructor(private teamServ: TeamService) { }

  ngOnInit() {
    try {
      this.teamServ.getAllTeams()
        .subscribe(data => {
          { this.teams = data.results.data.team; }
          this.filteredTeams = data.results.data.team;
        })
    }
    catch (err) {
      throw err;
    }
  }

  sortByName() {
    if(this.isSort) {
      this.filteredTeams = this.filteredTeams.sort( (a, b) => {
        if(a.name > b.name) { return -1;}
        else if(a.name < b.name) { return 1;}
        else { return 0;}
      });
      this.isSort = false;
    }
    else {
      this.filteredTeams = this.filteredTeams.sort( (a, b) => {
        if(a.name > b.name) { return 1;}
        else if(a.name < b.name) { return -1;}
        else { return 0;}
      });
      this.isSort = true;
    }
  }

  sortById() {
    if(this.isSort) {
      this.filteredTeams = this.filteredTeams.sort( (a, b) => {
        if(a.id > b.id) { return -1;}
        else if(a.id < b.id) { return 1;}
        else { return 0;}
      });
      this.isSort = false;
    }
    else {
      this.filteredTeams = this.filteredTeams.sort( (a, b) => {
        if(a.id > b.id) { return 1;}
        else if(a.id < b.id) { return -1;}
        else { return 0;}
      });
      this.isSort = true;
    }
  }

  sortByConference() {
    if(this.isSort) {
      this.filteredTeams = this.filteredTeams.sort( (a, b) => {
        if(a.conference > b.conference) { return -1;}
        else if(a.conference < b.conference) { return 1;}
        else { return 0;}
      });
      this.isSort = false;
    }
    else {
      this.filteredTeams = this.filteredTeams.sort( (a, b) => {
        if(a.conference > b.conference) { return 1;}
        else if(a.conference < b.conference) { return -1;}
        else { return 0;}
      });
      this.isSort = true;
    }
  }

  sortByDivision() {
     if(this.isSort) {
      this.filteredTeams = this.filteredTeams.sort( (a, b) => {
        if(a.division > b.division) { return -1;}
        else if(a.division < b.division) { return 1;}
        else { return 0;}
      });
      this.isSort = false;
    }
    else {
      this.filteredTeams = this.filteredTeams.sort( (a, b) => {
        if(a.division > b.division) { return 1;}
        else if(a.division < b.division) { return -1;}
        else { return 0;}
      });
      this.isSort = true;
    }
  }

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
    if(event.target.value.toLocaleLowerCase() === 'afc') {
      event.target.value = 'American Football Conference';
    }
    else if(event.target.value.toLocaleLowerCase() === 'nfc') {
      event.target.value = 'American Football Conference';
    }
    this.filteredTeams = this.teams.filter((value) => {
      return value.conference.toLowerCase().includes(event.target.value.toLowerCase());
    })
  }

  searchDivision(event: any) {
    this.filteredTeams = this.teams.filter((value) => {
      return value.division.toLowerCase().includes(event.target.value.toLowerCase());
    })
  }

  customSort(arr: Team[], field: string) {
    switch(field) {
      case 'id':
        alert('entrou id');
        return arr.sort( (a, b) => {
          if(a.id > b.id) { return 1;}
          else if(a.id < b.id) {return -1;}
          else {return 0;}
        })

      case 'name':
        alert('entrou name');
        return arr.sort( (a, b) => {
          if(a.name > b.name) { return 1;}
          else if(a.name < b.name) {return -1;}
          else {return 0;}
        }).reverse();

      case 'division':
        alert('entnrou division');
        return arr.sort( (a, b) => {
          if(a.division > b.division) { return 1;}
          else if(a.division < b.division) {return -1;}
          else {return 0;}
        }).reverse();

      case 'conference':
        return arr.sort( (a, b) => {
          if(a.conference > b.conference) { return 1;}
          else if(a.conference < b.conference) {return -1;}
          else {return 0;}
        })
    }
  }
}
