import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

/* My app */
import { HomeModule } from './home/home.module';
import {
  FooterComponent,
  HeaderComponent,
  SharedModule
} from './shared';

/*  TOASTER */
import { ToastrModule } from 'ngx-toastr';

/*  APOLLO */
import { ApolloModule, APOLLO_OPTIONS } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { Angular2SocialLoginModule } from "angular2-social-login";

/* environment */
import { environment } from "../environments/environment";

/*  ngrx */
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from "./store/app.reducers";
import { EffectsModule } from "@ngrx/effects";
import { effectsArray,effectsNumber } from "./store/effects";

let providers = {
  "google": {
    "clientId": "182576342220-mud060hgmvvspd7ls0gqfj359r6fk2hm.apps.googleusercontent.com"
  }
};

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent],
  imports: [
    BrowserModule,
    Angular2SocialLoginModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AuthModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    /* @ngrx REDUX */
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(effectsArray),
    EffectsModule.forRoot(effectsNumber),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    })
  ],
  providers: [
    {
      /* Apollo provider */
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: "http://127.0.0.1:8000/graphql/query/"
          })
        };
      },
      deps: [HttpLink]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

Angular2SocialLoginModule.loadProvidersScripts(providers);
