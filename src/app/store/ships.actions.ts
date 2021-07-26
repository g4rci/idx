import { Action } from '@ngrx/store';

// Constants
export const GET_SHIPS = 'GET_SHIPS_CONTENT';
export const GET_SHIPS_SUCCESS = 'GET_SHIPS_CONTENT_SUCCESS';
export const GET_SHIPS_FAILURE = 'GET_SHIPS_CONTENT_FAILURE';


// Action to start request and setting loading status on
export class GetShipsAction implements Action {
  readonly type = GET_SHIPS;
}
// Action to check request was successful
export class GetShipsSuccessAction implements Action {
  readonly type = GET_SHIPS_SUCCESS;
  constructor(public payload: {ships_content: any; page: any; error?: {} }) { }
}

// Action for failure to People receive data
export class GetShipsFailureAction implements Action {
  readonly type = GET_SHIPS_FAILURE;
  constructor(public payload: {error?: {}, loading?: any}) {}
}

// Exporting all types for reducer to access
// Allows for strict typescript rules for the reducer
// Helpful after removal of payload from action
export type ShipsActions = GetShipsAction | GetShipsSuccessAction | GetShipsFailureAction;