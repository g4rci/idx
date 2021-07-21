import { Action } from '@ngrx/store';

export function shipsReducer(state: any, action: Action) {
  switch (action.type) {
    case 'GET_FIRST_SHIPS':
      return this.ships.getShips(1).subscribe((ships) => {
        this.dataList = ships;
        console.log('SHIPS -->', ships);
      });
    case 'GET_SHIPS':
      return this.ships.getShips().subscribe((ships) => {
        this.dataList = ships;
        console.log('SHIPS -->', ships);
      });
  }
}
