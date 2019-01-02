import { NgModule } from '@angular/core';
import { CartComponent } from './cart.component';
import { SharedModule } from '../shared';
import { CartRoutingModule } from './cart-routing.module';
import { NgxPayPalModule } from 'ngx-paypal';
import { Module as StripeModule } from "stripe-angular"

@NgModule({
  imports: [
    SharedModule,
    CartRoutingModule,
    NgxPayPalModule,
    StripeModule.forRoot()
  ],
  declarations: [
    CartComponent,
  ],

  providers: [
  ]
})
export class CartModule {}
