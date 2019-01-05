import { Component, OnInit } from '@angular/core';
import { DeviceListConfig, FavouriteService, UserService, User} from '../core';
/* ngrx */
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducers';
import * as favouritesActions from '../store/actions';
import * as cartActions from '../store/actions';
/* import { FavouritesModel } from '../store/models'; */
@Component({
  selector: "app-home-page",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.sass"]
})
export class HomeComponent implements OnInit {
  currentUser: User;
  favouriteDevices = [];
  constructor(
    private userService: UserService,
    private favouriteService: FavouriteService,
    private store: Store<AppState>
    ) {

  }

  
  ngOnInit() {
    /* console.warn("this.store", this.store, "--------", this.store.dispatch(new favouritesActions.ActionCargarFavoritos())); */
    this.userService.currentUser.subscribe(userData => {
      this.currentUser = userData;
    });
    console.log(this.currentUser)
    this.store.dispatch(new favouritesActions.ActionCargarFavoritos());
    
    this.store.select("favoritos").subscribe(favoritos => {
      this.favouriteDevices=[];
      console.log("favoritos home", favoritos);
      
      this.favouriteDevices = favoritos.favourites.map((dev)=>{
        return dev.device
      });
      /* debugger */
      console.log("nuevo", this.favouriteDevices);
    }); 
    //console.warn("this.store", this.store, "--------", this.store.dispatch(new cartActions.ActionLoadPriceTotal()));
    
  }/** End ngOnInit*/


}
