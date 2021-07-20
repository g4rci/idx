import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Ships, ShipsService } from '../../services/ships.service';
import { ShipsDetailsComponent } from './ships-details/ships-details.component';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {
  public dataList: Ships[] = [];
  private page: number;

  constructor( public ships: ShipsService) {}

  ngOnInit(): void {
    this.ships.getShips(1).subscribe((ships) => {
      this.dataList = ships;
      console.log('SHIPS -->', ships)
    })
  } 

 recibirPage( page: number){
    this.page = page 
    console.log(this.page)
    this.ships.getShips(this.page).subscribe((ships) => {
      this.dataList = ships;
      console.log('SHIPS -->', ships)
    })
 }

  
}


