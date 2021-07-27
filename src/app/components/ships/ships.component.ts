import { state } from '@angular/animations';
import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ReducerManager, Store, State, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  getShipsData,
  selectShipsData,
  ShipsState,
} from '../../store/ships.selectors';
import { ShipsService } from '../../services/ships.service';

import * as shipsActions from '../../store/ships.actions';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss'],
  providers: [],
})
export class ShipsComponent implements OnInit {
  public dataList: any;
  public page: any = 1;

  ships$: Observable<any>;

  constructor(public ships: ShipsService, private store: Store<ShipsState>) {}

  ngOnInit(): void {
    this.store
    .select(getShipsData)
    .subscribe((state) => {
      this.dataList = state;
      this.page = 1;
    });
    
    // this.ships$ = this.store

    // this.ships$.subscribe((data) => {
    //   this.dataList = data.ships.ships_content;
    //   this.page = 1;
    //   console.log('data', data);
    // });
    this.store.dispatch(new shipsActions.GetShipsAction());
    // this.ships.getShips(1).subscribe((ships) => {
    //   this.dataList = ships;
    //   console.log('SHIPSs -->', ships);
    // });
  }

  recibirPage(page) {
    this.page = page;

    this.store.dispatch(
      new shipsActions.GetShipsSuccessAction({
        ships_content: this.dataList,
        page: this.page,
      })
    );
    this.store.dispatch(new shipsActions.GetShipsAction());
  }
}
