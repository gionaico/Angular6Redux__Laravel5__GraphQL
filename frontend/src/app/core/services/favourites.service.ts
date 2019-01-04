/* import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators/map';

@Injectable()
export class FavouriteService {

  constructor(private apiService: ApiService) {}

  getFavourites(): Observable<[string]> {
    return this.apiService.get('/category')
      .pipe(map(data => {
        console.log("FavouriteService service", data);
        return data.categories;
      }));
  }
} */
///////////////////////////////

import { Injectable } from '@angular/core';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { Query } from "../../shared/filter/types";
import { UserService  } from "./user.service";
import { User } from "../models";


@Injectable()
export class FavouriteService {
  currentUser: User;

  constructor(
    private apollo: Apollo,
    private userService: UserService
  ) { 
    console.log("userService", this.userService.currentUser);
  }
  favourites: Object = Array;
  

  getFavourites() {
    this.userService.currentUser.subscribe(userData => {
      this.currentUser = userData;
    });

    try {
      return this.apollo.watchQuery<any>({ query: gql`
          query {
            favourites(user: "${this.currentUser.username}"){
              data {
                user
                device {
                  id
                  description
                  slug
                  media
                }
              }
            }
          }
        ` }).valueChanges;

    } catch (error) {
      console.warn("error", error);
    }
  }

  updateFavourite(user, device_id) {
    return this.apollo.mutate({
      mutation: gql`mutation{
                  FavouritesMutation(user:"${user}",  device_id:${device_id}){
                    delete
                  }
                }`,
      /* variables: {
        repoFullName: 'apollographql/apollo-client'
      } */
    })/* .subscribe(({ data }) => {
      console.log('got data', data);
    }, (error) => {
      console.log('there was an error sending the query', error);
    }); */

  }

}
