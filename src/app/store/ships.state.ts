// states for ships data

export interface ShipsState {
    ships_content?: any;
    error?: any;
    loading?: boolean;
    page: number
  }
  
  export const initialShipsState: ShipsState = {
    ships_content: [],
    loading: false,
    page: 1
  };