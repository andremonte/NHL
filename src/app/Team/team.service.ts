import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamUrl: string = "https://delivery.chalk247.com/team_list/NFL.JSON?api_key=74db8efa2a6db279393b433d97c2bc843f8e32b0";

  constructor(private http: HttpClient) { }

  getAllTeams(): Observable<any> {
    return this.http.get<any>(`${this.teamUrl}`);
  }

}
