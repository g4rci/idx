import { Component, OnInit } from '@angular/core';
import { Planets, PlanetState } from 'src/app/store/reducers/planet.reducer';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {

  public dataList: Planets[] = [];

  constructor(private planets: PlanetState) { }

  ngOnInit(): void {
    this.planets.getPlanets().subscribe((planet) => {
      this.dataList = planet;
      console.log('PLANETS -->', this.dataList.results)
    })
  }

}
