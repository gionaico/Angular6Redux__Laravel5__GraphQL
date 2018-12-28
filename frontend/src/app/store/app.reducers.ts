import { ActionReducerMap } from "@ngrx/store";
import * as reducers from "./reducers";

export interface AppState {
  favoritos: reducers.FavouritesState;
}

export const appReducers: ActionReducerMap<AppState> = {
  favoritos: reducers.favouritesReducer
};
