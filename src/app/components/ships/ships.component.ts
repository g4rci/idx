import { state } from '@angular/animations';
import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ReducerManager, Store, State } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShipsState } from 'src/app/store/ships.state';
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

  constructor(
    public ships: ShipsService,
    private store: Store<ShipsState>,
  ) {}

  ngOnInit(): void {
    this.ships$ = this.store;

    this.ships$.subscribe((data) => {
      this.dataList = data.ships.ships_content;
      this.page = data.ships.page
    });
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
