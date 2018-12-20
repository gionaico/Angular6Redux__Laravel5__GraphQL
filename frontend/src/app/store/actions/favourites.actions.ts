import { Action } from "@ngrx/store";
import { FavouritesModel } from "../models/favourites.model";



export const CARGAR_FAVORITOS = '[Favoritos] Cargar productos fav'
export const CARGAR_FAVORITOS_FAIL = '[Favoritos] Cargar productos favoritos FAIL'
export const CARGAR_FAVORITOS_SUCCESS = '[Favoritos] Cargar productos favoritos SUCCESS';

export class ActionCargarFavoritos implements Action {
    readonly type = CARGAR_FAVORITOS;
    constructor() {
        console.warn("ActionCargarFavoritos");
    }
}

export class ActionCargarFavoritosFail implements Action {
    readonly type = CARGAR_FAVORITOS_FAIL;
    constructor( public payload: any ) {}
}

export class ActionCargarFavoritosSuccess implements Action {
    readonly type = CARGAR_FAVORITOS_SUCCESS;
    /* constructor(public favourites: FavouritesModel[] ) { */
    constructor(public favourites: any[]) {
        console.error("eeee", this.favourites);
    }
}
 

export type actionsFavoritos =  ActionCargarFavoritos | 
                                ActionCargarFavoritosFail | 
                                ActionCargarFavoritosSuccess;