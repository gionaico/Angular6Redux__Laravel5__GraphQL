import { Action } from "@ngrx/store";

export const LOAD_CART_PRICE_TOTAL = 'Load price total'
export const LOAD_CART_PRICE_TOTAL_FAIL = 'Load price total FAIL'
export const LOAD_CART_PRICE_TOTAL_SUCCESS = 'Load price total SUCCESS'

/******************* PRICE_TOTAL ************************/

export class ActionLoadPriceTotal implements Action {
    readonly type = LOAD_CART_PRICE_TOTAL;
    constructor() {console.log("ActionLoadPriceTotal");}
}

export class ActionLoadPriceTotalFail implements Action {
    readonly type = LOAD_CART_PRICE_TOTAL_FAIL;
    constructor( public payload: any ) {console.error("ActionLoadPriceTotal_FAIL");}
}

export class ActionLoadPriceTotalSuccess implements Action {
    readonly type = LOAD_CART_PRICE_TOTAL_SUCCESS;
    constructor(public cart_total: any) {}
}

export type actionsCart =   ActionLoadPriceTotal | 
                            ActionLoadPriceTotalFail | 
                            ActionLoadPriceTotalSuccess;