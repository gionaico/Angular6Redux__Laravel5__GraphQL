import { Component, OnInit } from '@angular/core';
import { Product } from './cart.model';
import { CartService } from '../core/services/cart.service'
import { default as swal } from 'sweetalert2'
import { UserService, User } from '../../../src/app/core';
import { ToastrService } from 'ngx-toastr';

import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducers';
import * as cartActions from '../store/actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  //styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  currentUser: User;
  test: string;
  total_price:[];
  constructor(
    private cartService: CartService,
    private userService: UserService,
    private toastr: ToastrService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    let cartSession = localStorage.getItem("cart");
    if (cartSession != null) this.cartService.items = JSON.parse(cartSession);
  }

  items(): Product[] {return this.cartService.items;}

  removeItem(Product) {
    console.log("REMOVEITEM", Product);
    let cart = this.cartService;
    swal({
      title: 'Confirmar',
      text: "Desea eliminar " + Product.brand + " con un precio de " + Product.price + "€ del carrito?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#449d44',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then(function (e) {
      if (e.value == true) {
        swal(
          'Eliminado!',
          'Producto eliminado satisfactoriamente',
          'success'
        );
        return cart.removeItem(Product);
      }
    });
  }

  total() {
    this.store.dispatch(new cartActions.ActionLoadPriceTotal());
    this.store.select("cart_total").subscribe(res => {this.total_price = res.cart_total;});
    return this.total_price;
  }

  clearCart() {
    let cart = this.cartService;
    swal({
      title: 'Confirmar',
      text: "Desea vaciar el carrito?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#449d44',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then(function (e) {
      if (e.value == true) {
        swal(
          'Productos fuera!',
          'Carrito vaciado satisfactoriamente',
          'success'
        );
        return cart.clearCart();
      }
    });
  }

  buyCart() {
    this.userService.currentUser.subscribe(
      (userData) => {this.currentUser = userData;});

    let priceCart = this.cartService.total();
    let deviceCart = this.cartService.getCart();
    let dataCart = {
      id: this.currentUser.id,
      price: priceCart,
      device: deviceCart
    };

    this.cartService.sendCart(dataCart).subscribe(
      data => {
        console.log("response CART:", data);
        if (data == 1) {
          this.toastr.success("Compra realizada correctamente");
          return this.cartService.clearCart();
        }else this.toastr.warning("Ha habido algun problema en el proceso de compra");
      },
      err => { console.error("Error cart", err); }
    );
  }
}

