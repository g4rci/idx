import { Ships } from './services/ships.service';

export interface AppState {
    readonly ships: Ships[];
}