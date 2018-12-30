import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import * as cartActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from "rxjs/observable/of";
import { CartService } from '../../core/services';

@Injectable()
export class CartEffects {

    constructor(
        private actions$: Actions,
        public cartService: CartService
    ) { }
    @Effect()
    loadCart$ = this.actions$.ofType(cartActions.LOAD_CART_PRICE_TOTAL)
        .pipe(
            /*switchMap(() => {
                return this.cartService.items
                    .map(
                        data => new cartActions.ActionLoadPriceTotalSuccess(data),
                        catchError(err => of(new cartActions.ActionLoadPriceTotalFail(err))
                        )
                    )

            })*/

            switchMap(() => {
                let price = 0;
                return this.cartService.items
                    .map(
                        item => new cartActions.ActionLoadPriceTotalSuccess(
                            price = price + parseFloat(item.price)
                        ),
                        catchError(err => of(new cartActions.ActionLoadPriceTotalFail(err)))
                    )
            })


        );
}