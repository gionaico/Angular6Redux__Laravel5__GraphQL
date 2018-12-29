import { Component, Input } from '@angular/core';

import { Device, UserService } from "../../core";

@Component({
  selector: "app-device-preview",
  styleUrls: ["list-device.sass"],
  templateUrl: "./device-preview.component.html"
})
export class DevicePreviewComponent {
  constructor(
    private userService: UserService
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
    console.log("this.userService.getCurrentUser()", this.userService.getCurrentUser());
    
    console.log(device);
    alert("yess");
  }
}
