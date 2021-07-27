import { ActionReducer, Action } from '@ngrx/store';
import * as fromShips from './ships.actions';
import { ShipsState, initialShipsState } from './ships.selectors';



export function ShipsReducer(state = initialShipsState, action: fromShips.ShipsActions): ShipsState {
  switch (action.type) {

    case fromShips.GET_SHIPS: {
      return {
        // Set the state of loading to true to allow a loading message
        ...state,
        loading: true,
      };
    };

    case fromShips.GET_SHIPS_SUCCESS: {
      return {
        // Turn loading off as data is received
        ...state,
        ships_content: action.payload.ships_content,
        page: action.payload.page,
        error: action.payload.error,
        loading: false,
      };
    };

    case fromShips.GET_SHIPS_FAILURE: {
      return {
        // Handle errors getting people data
        ...initialShipsState,
        error: action.payload.error,
        loading: false,
      };
    };

    default:
      return state;
  }
}