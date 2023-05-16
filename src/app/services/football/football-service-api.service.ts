import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FootballServiceApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // GET Competitions
  public getCompetitions(): Observable<any>{
    const url = `${this.apiUrl}competitions.xml?api_key=n7b6tcfarsfeu5392b7hs94v`;
    return this.http.get(url, {responseType: 'text'});
  }

}
