import { createSelector } from "@ngrx/store";
import { Ships } from "../services/ships.service";

export interface ShipsState{
    ships: Ships;
}

export interface AppState {
    shipsState: ShipsState;
}

export const selectState = ( state : AppState ) => state.shipsState;

export const selectShipsData = createSelector(
    selectState,
    (state: ShipsState) => state.ships
)