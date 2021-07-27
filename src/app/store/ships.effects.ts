import { initialShipsState, ShipsState } from './ships.selectors';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action, State, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as shipsActions from './ships.actions';

import { HttpClient } from '@angular/common/http';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ShipsService } from '../services/ships.service';

@Injectable()
export class ShipsEffects {
  constructor(
    private http: HttpClient,
    private actions$: Actions,
    private state: State<ShipsState>,
    public ships: ShipsService
  ) {}


  @Effect()
  getShips$: Observable<Action> = this.actions$.pipe(
    ofType(shipsActions.GET_SHIPS),

    switchMap(() => {
      return this.http
        .get(`${this.ships.url}${this.state.value.ships.page}`)
        .pipe(
          map(
            (data) =>
              new shipsActions.GetShipsSuccessAction({
                ships_content: data,
                page: this.state.value.ships.page,
              })
          ),
          catchError((error) =>
            of(new shipsActions.GetShipsFailureAction(error))
          )
        );
    })
  );
}
