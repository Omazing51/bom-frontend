import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'https://v3.football.api-sports.io/leagues';
  constructor(private http: HttpClient) { }

  public getData(): Observable<any>
  {
    console.log(this.getData());
    return this.http.get<any>(this.url);
  }
}
