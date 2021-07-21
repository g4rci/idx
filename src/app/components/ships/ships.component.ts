import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShipsState } from 'src/app/store/ships.state';
import { ShipsService } from '../../services/ships.service';

import * as shipsActions from '../../store/ships.actions'

interface AppState {
  ships: any[];
}

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss'],
})
export class ShipsComponent implements OnInit {
  public dataList: any;
  private page: number;

  ships$: Observable<any>;

  constructor(public ships: ShipsService, private store: Store<ShipsState>) {
    this.ships$ = this.store;

    this.ships$.subscribe((data)=> {
      this.dataList = data.ships.ships_content;
      console.log(data);
    })

    this.store.dispatch(
      new shipsActions.GetShipsAction()
    )
  }

  recibirPage(page: number) {
    this.page = page;
    console.log(this.page);
    this.ships.getShips(this.page).subscribe((ships) => {
      this.dataList = ships;
      console.log('SHIPSss -->', ships);
    });
  }
  

  ngOnInit(): void {
    // this.ships.getShips(1).subscribe((ships) => {
    //   this.dataList = ships;
    //   console.log('SHIPSs -->', ships);
    // });
  }

  

}
