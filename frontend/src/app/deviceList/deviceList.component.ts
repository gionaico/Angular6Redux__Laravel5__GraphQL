import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceListConfig, UserService, User } from '../core';

@Component({
  selector: 'app-deviceList-page',
  templateUrl: './deviceList.component.html'
})

export class DeviceListComponent implements OnInit {
  isAuthenticated: boolean;
  listConfig: DeviceListConfig = {
    type: "all",
    filters: {}
  };
  
  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.isAuthenticated.subscribe(authenticated => {
      this.isAuthenticated = authenticated;

      // set the article list accordingly
      if (authenticated) {
        this.setListTo("feed");
      } else {
        this.setListTo("all");
      }
    });
  }

  setListTo(type: string = "", filters: Object = {}) {
    this.listConfig = { type: type, filters: filters };
  }

  onFilterDat(filter) {
    console.log("home list FILTERDATA", filter);
    this.listConfig = filter;
  }
}

