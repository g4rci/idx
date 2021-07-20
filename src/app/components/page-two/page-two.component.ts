import { Component, OnInit } from '@angular/core';
import { Planets, PlanetService } from '../../services/planet.service';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {

  public dataList: Planets[] = [];

  constructor(private planets: PlanetService) { }

  ngOnInit(): void {
    this.planets.getPlanets().subscribe((planet) => {
      this.dataList = planet;
      console.log('PLANETS -->', this.dataList)
    })
  }

}
