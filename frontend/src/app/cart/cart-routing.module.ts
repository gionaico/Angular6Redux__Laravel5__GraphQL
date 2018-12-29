import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';
/**import { HomeAuthResolver } from './home-auth-resolver.service'*/

const routes: Routes = [
  {
    path: ':device',
    component: CartComponent,
    /*resolve: {
      isAuthenticated: HomeAuthResolver
    }*/
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {}
