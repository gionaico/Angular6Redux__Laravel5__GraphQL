import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
/**import { HomeAuthResolver } from './home-auth-resolver.service'*/

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
    /*resolve: {
      isAuthenticated: HomeAuthResolver
    }*/
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {}
