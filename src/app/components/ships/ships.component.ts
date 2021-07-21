import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { shipsReducer } from 'src/app/store/ships.reducer';
import { Ships, ShipsService } from '../../services/ships.service';

interface AppState {
  ships: any[];
}

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss'],
})
export class ShipsComponent implements OnInit {
  public dataList: Ships[] = [];
  private page: number;

  constructor(public ships: ShipsService, private store: Store<AppState>) {
    this.store.subscribe((state) => {
      console.log(state);
    });
  }
//ngrx
  getFirstShips() {
    const accion: Action = {
      type: 'GET_FIRST_SHIPS'
    }
    this.store.dispatch(accion);
  }

  ngOnInit(): void {
    this.ships.getShips(1).subscribe((ships) => {
      this.dataList = ships;
      console.log('SHIPS -->', ships);
    });
  }

  recibirPage(page: number) {
    this.page = page;
    console.log(this.page);
    this.ships.getShips(this.page).subscribe((ships) => {
      this.dataList = ships;
      console.log('SHIPS -->', ships);
    });
  }
  

}
