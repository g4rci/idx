import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface ShipsState {
    ships_content?: any;
    error?: any;
    loading?: boolean;
    page: any;
  }
  
  export const initialShipsState: ShipsState = {
    ships_content: [],
    loading: false,
    page: 1,
  };

export const getShipsData = (state) => state.ships.ships_content

export const selectShipsData = createSelector(
    getShipsData,
    (state: ShipsState) => state
)