import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.scss']
})
export class FootballComponent {
  leagues: any;
  constructor(private apiService: ApiService, private httpclien:HttpClient) {}
  ngOnInit() {
    this.apiService.getData().subscribe((data: any) => {
      this.leagues = data.response;
    });
  }
}
