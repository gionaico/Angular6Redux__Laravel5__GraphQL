import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceComponent } from './device.component';
/**import { HomeAuthResolver } from './home-auth-resolver.service'*/

const routes: Routes = [
  {
    path: ':slug',
    component: DeviceComponent,
    /*resolve: {
      isAuthenticated: HomeAuthResolver
    }*/
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceRoutingModule {}
