import { Component, OnInit } from '@angular/core';
import { Ships, ShipsState } from '../../store/reducers/ships.reducer';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  public dataList: Ships[] = [];

  constructor( private ships: ShipsState) {}

  ngOnInit(): void {
    this.ships.getShips().subscribe((ships) => {
      this.dataList = ships;
      console.log('SHIPS -->', this.dataList.results)
    })
  }
}
