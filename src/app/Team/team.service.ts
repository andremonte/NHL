import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamUrl: string = "https://api.codetabs.com/v1/proxy?quest=https://delivery.chalk247.com/team_list/NFL.JSON?api_key=74db8efa2a6db279393b433d97c2bc843f8e32b0";

  constructor(private http: HttpClient) { }

  getAllTeams(): Observable<any> {
/*      let headers = new HttpHeaders().set("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");  */
    return this.http.get<any>(`${this.teamUrl}`, /* {headers} */);
  }

}
