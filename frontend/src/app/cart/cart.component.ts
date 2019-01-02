import { Component, OnInit,HostListener } from '@angular/core';
import { Product } from './cart.model';
import { CartService } from '../core/services/cart.service'
import { default as swal } from 'sweetalert2'
import { UserService, User } from '../../../src/app/core';
import { ToastrService } from 'ngx-toastr';

import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducers';
import * as fromActions from '../store/actions';

import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';
import { Observable } from 'apollo-link';


import { StripeScriptTag,StripeToken } from "stripe-angular"
import { environment } from '../../environments/environment';
declare var StripeCheckout:any;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  //styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  currentUser: User;
  test: string;
  total_price:[];
  extraData = {
    "name": "asdsd",
    "address_city": "null",
    "address_line1": "null",
    "address_line2": "null",
    "address_state": "null",
    "address_zip": "null"
  }

  handler: any;
  amount = 500;


  //public payPalConfig?: PayPalConfig;
  constructor(
    private cartService: CartService,
    private userService: UserService,
    private toastr: ToastrService,
    private store: Store<AppState>
  ) {}
/* */
  ngOnInit() {
    this.handler = StripeCheckout.configure({
      key:environment.stripeKey,
      image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
      locale: 'auto',
      token: token => {
        console.log("TOKEN",token);
        //this.paymentSvc.processPayment(token, this.amount)
      }
    });

    let cartSession = localStorage.getItem("cart");
    if (cartSession != null) {this.cartService.items = JSON.parse(cartSession)};
    //this.initConfig();
  }
//////////
handlePayment() {
  this.handler.open({
    name: 'FireStarter',
    excerpt: 'Deposit Funds to Account',
    amount: this.amount
  });
}
@HostListener('window:popstate')
onPopstate() {
  this.handler.close()
}
  /////////////////
  /*onStripeInvalid( error:Error ){
    console.log('Validation Error', error)
  }
 
  setStripeToken( token:StripeToken ){
    console.log('Stripe token', token)
  }
 
  onStripeError( error:Error ){
    console.error('Stripe error', error)
  }*/




  ///////////

  /*initConfig() {
    this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {
      commit: true,
      client: {
        sandbox: 'AWm6L0ziqCyDCjqbP_4Fz44QbLJc1aWiyap3Lgl572CFjR93zHBom76XzfyYr21xbVcBRWPGyW8CgeK5'
      },
      button: {
        label: 'paypal',
      },
      onPaymentComplete: (data, actions) => {
        console.log('Compra OK');
      },
      onCancel: (data, actions) => {
        console.log('OnCancel');
      },
      onError: (err) => {
        console.log('OnError',err);
      },
      transactions: [{
        amount: {
          currency: 'USD',
          total: 9
        }
      }]
    });
    
  }*/
  ///////////
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
    this.store.dispatch(new fromActions.ActionLoadPriceTotal());
    this.store.select("cart_total").subscribe(res => { this.total_price = res.cart_total;});
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

