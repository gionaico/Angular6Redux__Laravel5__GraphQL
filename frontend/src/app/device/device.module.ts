import { NgModule } from '@angular/core';
import { DeviceComponent } from './device.component';
import { SharedModule } from '../shared';
import { DeviceRoutingModule } from './device-routing.module';

@NgModule({
  imports: [
    SharedModule,
    DeviceRoutingModule
  ],
  declarations: [
    DeviceComponent
  ],

  providers: [
   
  ]
})
export class DeviceModule {}
