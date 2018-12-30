import { ActionReducerMap } from "@ngrx/store";
import * as reducers from "./reducers";

export interface AppState {
  favoritos: reducers.FavouritesState;
  cart_total: reducers.CartState;
}

export const appReducers: ActionReducerMap<AppState> = {
  favoritos: reducers.favouritesReducer,
  cart_total: reducers.CartReducer
};
