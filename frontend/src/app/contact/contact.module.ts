import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';
//import { HomeAuthResolver } from './home-auth-resolver.service';
import { SharedModule } from '../shared';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ContactRoutingModule
  ],
  declarations: [
    ContactComponent
  ],
  providers: [
  
  ]
})
export class ContactModule {}
