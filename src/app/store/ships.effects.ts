import { initialShipsState, ShipsState } from './ships.state';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as shipsActions from './ships.actions';

import { HttpClient } from '@angular/common/http';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class ShipsEffects {
  constructor(private http: HttpClient, private actions$: Actions) {}

  @Effect()
  getShips$: Observable<Action> = this.actions$.pipe(
    ofType(shipsActions.GET_SHIPS),

    switchMap(() => {
      // Add a recursive function to deal with arrays over 10 items.
      let page = initialShipsState.page
      return this.http
        .get(`https://swapi.dev/api/starships/?page=${page}`)
        .pipe(
          map(
            (data) =>
              new shipsActions.GetShipsSuccessAction({ ships_content: data })
          ),
          catchError((error) =>
            of(new shipsActions.GetShipsFailureAction(error))
          )
        );
    })
  );
}
