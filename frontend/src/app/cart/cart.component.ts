import { Component, OnInit, HostListener } from '@angular/core';
import { Product } from './cart.model';
import { CartService } from '../core/services/cart.service'
import { default as swal } from 'sweetalert2'
import { UserService, User } from '../../../src/app/core';
import { ToastrService } from 'ngx-toastr';

import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducers';
import * as fromActions from '../store/actions';

import { environment } from '../../environments/environment';
/** Stripe **/
declare var StripeCheckout: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  currentUser: User;
  test: string;
  total_price: [];
  handler: any;
  constructor(
    private cartService: CartService,
    private userService: UserService,
    private toastr: ToastrService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.initStripe();
    let cartSession = localStorage.getItem("cart");
    if (cartSession != null) { this.cartService.items = JSON.parse(cartSession) };
  }

  items(): Product[] { return this.cartService.items; }

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
    /* Redux */
    this.store.dispatch(new fromActions.ActionLoadPriceTotal());
    this.store.select("cart_total").subscribe(res => { this.total_price = res.cart_total; });
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
      (userData) => { this.currentUser = userData; });

    let priceCart = this.total();
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
        } else this.toastr.warning("Ha habido algun problema en el proceso de compra");
      },
      err => { console.error("Error cart", err); }
    );
  }

  /* Stripe */
  initStripe() {
    this.handler = StripeCheckout.configure({
      key: environment.stripeKey,
      image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
      locale: 'auto',
      token: token => {
        console.log("TOKEN", token);
        this.buyCart();
        this.handler.close();
      }
    });
  }

  handlePayment() {
    this.handler.open({
      name: 'Smart Device',
      description: "Pagar por stripe",
      currency: "eur",
      amount: this.total() + "00"
    });
  }
  @HostListener('window:popstate')
  onPopstate() {
    this.handler.close();
  }

}

