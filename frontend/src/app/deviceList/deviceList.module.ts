import { NgModule } from '@angular/core';
import { DeviceListComponent } from './deviceList.component';
import { SharedModule } from '../shared';
import { DeviceListRoutingModule } from './deviceList-routing.module';

@NgModule({
  imports: [
    SharedModule,
    DeviceListRoutingModule
  ],
  declarations: [
    DeviceListComponent
  ],

  providers: [
   
  ]
})
export class DeviceListModule {}
