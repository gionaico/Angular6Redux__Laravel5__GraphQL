import { Injectable } from '@angular/core'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Product } from '../../cart/cart.model';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

@Injectable()
export class CartService {
    items = [];
    constructor(private apiService: ApiService) { }

    addItem(item: Product) {
        console.log("CART SERVICE", item);
        if (localStorage.getItem("cart")) {
            let cart_array = [], cart_old = localStorage.getItem("cart");
            cart_array.push(item, ...JSON.parse(cart_old));
            JSON.parse(cart_old).map(element => {
                if (element.slug == item.slug) cart_array.splice(cart_array.indexOf(item), 1);
            });
            localStorage.setItem("cart", JSON.stringify(cart_array));
        } else {
            this.items = [];
            this.items.push(item);
            localStorage.setItem("cart", JSON.stringify(this.items));
        }
    }

    removeItem(Product) {
        this.items.splice(this.items.indexOf(Product), 1);
        localStorage.setItem("cart", JSON.stringify(this.items));
    }

    total() {
        return this.items.map(item => item.price)
            .reduce((prev, price) => prev + parseFloat(price), 0)
    }

    clearCart() {
        localStorage.removeItem("cart");
        return this.items = [];
    }

    totalProd() {
        if (localStorage.getItem("cart") != null)
            return JSON.parse(localStorage.getItem("cart")).length;
    }

    getCart() {
        if (localStorage.getItem("cart") != null)
            return JSON.parse(localStorage.getItem("cart"));
    }

    sendCart(data): Observable<any> {
        console.log("cart send service", data);
        return this.apiService.post('/pedidos', { pedido: data })
            .pipe(map(data => data));

    }

}