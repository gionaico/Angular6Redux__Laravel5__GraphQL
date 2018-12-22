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
import { GraphQLModule } from './graphql.module';




@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AuthModule,
    AppRoutingModule,
    GraphQLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}



// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';
// import { AuthModule } from './auth/auth.module';
// import { HomeModule } from './home/home.module';
// import {
//   FooterComponent,
//   HeaderComponent,
//   SharedModule
// } from './shared';
// import { AppRoutingModule } from './app-routing.module';
// import { CoreModule } from './core/core.module';
// /* import { GraphQLModule } from './graphql.module'; */



// import { HttpClientModule } from "@angular/common/http";
// import { ApolloModule, APOLLO_OPTIONS } from "apollo-angular";
// import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
// import { InMemoryCache } from "apollo-cache-inmemory";

// @NgModule({
//   declarations: [AppComponent, FooterComponent, HeaderComponent],
//   imports: [
//     BrowserModule,
//     CoreModule,
//     SharedModule,
//     HomeModule,
//     AuthModule,
//     AppRoutingModule,
//     /* GraphQLModule */
//     HttpClientModule,
//     ApolloModule,
//     HttpLinkModule
//   ],
//   providers: [
//     {
//       provide: APOLLO_OPTIONS,
//       useFactory(httpLink: HttpLink) {
//         return {
//           cache: new InMemoryCache(),
//           link: httpLink.create({
//             uri: "http://localhost:8000/graphql"
//           })
//         };
//       },
//       deps: [HttpLink]
//     }
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
