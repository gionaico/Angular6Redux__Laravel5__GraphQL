import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

// Apollo
import { ApolloModule, Apollo } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

@NgModule({
  exports: [HttpClientModule, ApolloModule, HttpLinkModule]
})
export class GraphQLModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      //link: httpLink.create({ uri: "http://localhost:4000/graphql" }),
      //link: httpLink.create({ uri: "http://laravel-angular-graphql-yomogan.c9users.io:8080/graphql" }),
      link: httpLink.create({ uri: "http://localhost:8000/graphql/" }),

      cache: new InMemoryCache()
    });
  }
}