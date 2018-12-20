import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import {
  FooterComponent,
  HeaderComponent,
  SharedModule
} from './shared';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';


/* environment */
import { environment } from "../environments/environment";
/* shared */
import { ToastrModule } from 'ng6-toastr-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Angular2SocialLoginModule } from "angular2-social-login";
/*  ngrx */
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from "./store/app.reducers";
import { EffectsModule } from "@ngrx/effects";
import { effectsArray } from "./store/effects";
/*  apollo */
import { HttpClientModule } from "@angular/common/http";
import { ApolloModule, APOLLO_OPTIONS } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

let providers = {
  "google": {
    "clientId": "182576342220-mud060hgmvvspd7ls0gqfj359r6fk2hm.apps.googleusercontent.com"
  }
};

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent],
  imports: [
    HttpClientModule,
    HttpLinkModule,
    ApolloModule,

    Angular2SocialLoginModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),


    BrowserModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
Angular2SocialLoginModule.loadProvidersScripts(providers);
