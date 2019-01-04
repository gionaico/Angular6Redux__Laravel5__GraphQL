import { Component, Input } from '@angular/core';
import { Device, UserService, User, FavouriteService} from "../../core";
import { default as swal } from "sweetalert2";

@Component({
  selector: "app-device-preview",
  styleUrls: ["list-device.sass"],
  templateUrl: "./device-preview.component.html"
})
export class DevicePreviewComponent {
  currentUser: User;
  constructor(
    private userService: UserService,
    private favouriteService: FavouriteService
  ) {}

  @Input() devices: Device;

  /*  onToggleFavorite(favorited: boolean) {
    this.devices["favorited"] = favorited;

    if (favorited) {
      this.devices["favoritesCount"]++;
    } else {
      this.devices["favoritesCount"]--;
    }
  } */

  favourite(device) {
    /*necesito el id de device y el username para enviar los datos y hacer una mutation*/
    
    console.log(
      "this.userService.getCurrentUser()",
      this.userService.getCurrentUser().username
    );
    this.favouriteService.updateFavourite(this.userService.getCurrentUser().username, device.id).subscribe(({ data }) => {
      console.log("got dataplplpl", data.FavouritesMutation.delete);
      if (data.FavouritesMutation.delete) 
        swal({
          type: 'error',
          title: "Deleted from favourites list",
          text: 'This product has been removed from your favourite list',
          showConfirmButton: false,
          timer: 3500
        })
      else
        swal({
          type: "success",
          title: "Add to favourites list",
          text: "This product has been add to your favourite list",
          showConfirmButton: false,
          timer: 3500
        });
      

    }, (error) => {
      console.log('there was an error sending the query', error);
    });;
    /* this.userService.currentUser.subscribe(userData => {
      this.currentUser = userData;
    }); */

    console.log(device);
  }
}
