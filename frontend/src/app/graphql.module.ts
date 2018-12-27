import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

// Apollo
import { ApolloModule, Apollo } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from 'apollo-link-context';

@NgModule({
  exports: [HttpClientModule, ApolloModule, HttpLinkModule]
})
export class GraphQLModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    const http = httpLink.create({uri: 'http://localhost:8000/api/devices'});
    const auth = setContext((_, { headers }) => {
      
      // return the headers to the context so httpLink can read them
      // in this example we assume headers property exists
      // and it is an instance of HttpHeaders
     
    });
    /*apollo.create({
      link: httpLink.create({ uri: "graphql" }),
      cache: new InMemoryCache()
    });*/
    apollo.create({
      link: auth.concat(http),
      cache: new InMemoryCache()
      // other options like cache
    });
  }
}