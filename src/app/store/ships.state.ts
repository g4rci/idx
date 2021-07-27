// states for ships data

import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";


// export interface ShipsState {
//   ships_content?: any;
//   error?: any;
//   loading?: boolean;
//   page: any;
// }

// export const initialShipsState: ShipsState = {
//   ships_content: [],
//   loading: false,
//   page: 1,
// };

// @Injectable()
// export class ShipsStore extends ComponentStore<ShipsState> {
  
//   constructor() {
//     super({ships_content: [],
//       loading: false,
//       page: 1,});
//   }

//   readonly setPage = this.updater((state: ShipsState, page: ShipsStore) => ({
//     page: [...state.page, page],
//   }));
// }