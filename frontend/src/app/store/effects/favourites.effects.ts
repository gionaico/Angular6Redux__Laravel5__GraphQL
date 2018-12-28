import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import * as favouritesActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from "rxjs/observable/of";
import { FavouriteService } from '../../core/services';

@Injectable()
export class FavouritesEffects {

    constructor(
        private actions$: Actions,
        public favouriteService: FavouriteService
    ) {}

    @Effect(/* { dispatch: false} */) /*Esro es un obserbable y se despacha mediante el dispatch */
    cargarFavourites$ = this.actions$.ofType( favouritesActions.CARGAR_FAVORITOS )
        .pipe(
            /* recibe un obserbable lo cancela y devuelve un nuevo observable */
            switchMap(() => {
                return this.favouriteService.getFavourites()
                    .pipe(
                    map(data => new favouritesActions.ActionCargarFavoritosSuccess(data),
                        catchError(err => of(new favouritesActions.ActionCargarFavoritosFail(err)) )
                    ))
            })            
        );


}



/* class MyEffects {
  constructor(private actions$: Actions, private auth: AuthService) { }

  @Effect() login$: Observable<Action> = this.actions$
    .ofType('LOGIN')
    .switchMap(action =>
      this.auth.login(action.payload)
        .map(res => ({ type: 'LOGIN_SUCCESS', payload: res }))
        .catch(err => Observable.of({ type: 'LOGIN_FAILURE', payload: err }))
    );

  @Effect() logout(): Observable<Action> {
    return this.actions$
      .ofType('LOGOUT')
      .switchMap(() =>
        this.auth.logout()
          .map(res => ({ type: 'LOGOUT_SUCCESS', payload: res }))
          .catch(err => Observable.of({ type: 'LOGOUT_FAILURE', payload: err }))
      );
  }
} */