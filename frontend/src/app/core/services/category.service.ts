import { Injectable } from '@angular/core';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { Query } from "../../shared/filter/types";
import { ApiService } from './api.service';

@Injectable()
export class CategoryService {
  constructor(
    private apiService: ApiService,
    private apollo: Apollo,
  ) {}
  categories: Object = Array;

  getCategories() {
    try {
     return this.apollo
        .watchQuery<Query>({
          query: gql`
          query{
            categories{
              data{
                id
                slug 
                name
              }
            }
          } `
        }).valueChanges;

    } catch (error) {
      console.warn("error", error);
    }
  }

}
