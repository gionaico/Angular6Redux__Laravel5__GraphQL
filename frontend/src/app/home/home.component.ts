import { Component, OnInit } from '@angular/core';
import { DeviceListConfig, UserService } from '../core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  
  constructor(
    private userService: UserService
    
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

  }

  setListTo(type: string = '', filters: Object = {}) {
    this.listConfig = {type: type, filters: filters};
  }

  onFilterDat(filter){
    console.log("home list FILTERDATA", filter);
    this.listConfig = filter;
  }

}
