import { Component, OnInit } from '@angular/core';
import { DeviceListConfig, UserService } from '../core';
/* ngrx */
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducers';
import * as favouritesActions from '../store/actions';
import * as cartActions from '../store/actions';
/* import { FavouritesModel } from '../store/models'; */
@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  
  constructor(
    private userService: UserService,
    private store: Store<AppState>
    
  ) {}

  isAuthenticated: boolean;
  listConfig: DeviceListConfig = {
    type: 'all',
    filters: {}
  };
  categories: Array<string> = [];
  tagsLoaded = false;

/*   ngOnInit() {
    
    try {
      this.apollo
        .watchQuery({
          query: gql`
            query {
              devices{
                data{
                  description
                  id
                }
              }
            }
          `
        })
        .valueChanges.subscribe(result => {
          console.log(result);
        });
    } catch (error) {
      console.warn("error", error);
    }

    this.userService.isAuthenticated.subscribe(authenticated => {
      this.isAuthenticated = authenticated;

      // set the article list accordingly
      if (authenticated) {
        this.setListTo("feed");
      } else {
        this.setListTo("all"); */
  
  ngOnInit() {    
    console.warn("this.store", this.store, "--------", this.store.dispatch(new favouritesActions.ActionCargarFavoritos()));

    this.store.dispatch(new favouritesActions.ActionCargarFavoritos());

    this.store.select("favoritos").subscribe(favoritos => {
      console.warn("favoritos", favoritos);
    });
    //console.warn("this.store", this.store, "--------", this.store.dispatch(new cartActions.ActionLoadPriceTotal()));

    this.userService.isAuthenticated.subscribe(
      (authenticated) => {
        this.isAuthenticated = authenticated;

        // set the article list accordingly
        if (authenticated) {
          this.setListTo('feed');
        } else {
          this.setListTo('all');
        }
      }
    );

  }/**
   * End ngOnInit
   */

  setListTo(type: string = '', filters: Object = {}) {
    this.listConfig = {type: type, filters: filters};
  }

  onFilterDat(filter){
    console.log("home list FILTERDATA", filter);
    this.listConfig = filter;
  }

}
