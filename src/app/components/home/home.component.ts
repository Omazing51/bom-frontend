import { Component } from '@angular/core';
import { FootballServiceApiService } from 'src/app/services/football/football-service-api.service';
import {xml2json} from 'xml-js'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 fData: any[] = [];

  constructor(private fapi: FootballServiceApiService) { }

  ngOnInit(): void {
    this.fapi.getCompetitions().subscribe(
      (data: any) => {
        const json = xml2json(data, {compact: true, spaces: 4});
        const daticos = JSON.parse(json).competitions;
        this.fData = daticos.competition

        console.log(this.fData);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
