import { Component, Input } from '@angular/core';

import { Device } from '../../core';

@Component({
  selector: "app-device-preview",
  styleUrls: ["list-device.sass"],
  templateUrl: "./device-preview.component.html"
})
export class DevicePreviewComponent {
  @Input() devices: Device;

  onToggleFavorite(favorited: boolean) {
    this.devices["favorited"] = favorited;

    if (favorited) {
      this.devices["favoritesCount"]++;
    } else {
      this.devices["favoritesCount"]--;
    }
  }
}
