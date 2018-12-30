import { CartModel } from "../models/cart.model";
import * as fromCart from "../actions";


export interface CartState {
    cart_total: [];
    loaded: boolean; /* Articulos favoritos cargados */
    loading: boolean; /* Cargando articulos favoritos */
    error: any;
}

const estadoInicial: CartState = {
    cart_total: [],
    loaded: false,
    loading: false,
    error: null
};


export function CartReducer(state = estadoInicial, action:fromCart.actionsCart): CartState{
    console.log("REDUCERACTION",action);
    switch (action.type) {
        case fromCart.LOAD_CART_PRICE_TOTAL:
            return {
                ...state,
                loading:true,
                error: null
            };
        
        case fromCart.LOAD_CART_PRICE_TOTAL_SUCCESS:
        console.log("LOAD_CART_PRICE_TOTAL_SUCCESS");
            return {
                ...state,
                loading: false,
                loaded: true,
                cart_total: action.cart_total
            };
        
        case fromCart.LOAD_CART_PRICE_TOTAL_FAIL:
            console.warn("action.payload", action.payload);
            
            return {
                ...state,
                loading: false,
                loaded: false,
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                    url: action.payload.url,
                    ye:"ff"
                }
            };
    
        default:
            return state;
    }
}
