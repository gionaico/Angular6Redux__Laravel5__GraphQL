import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Device, DeviceListConfig, DevicesService } from '../../core';
@Component({
  selector: "app-device-list",
  styleUrls: ["list-device.sass"],
  templateUrl: "./device-list.component.html"
})
export class DeviceListComponent {
  devices: Device = {} as Device;
  errors: Object = {};
  isSubmitting = false;
  limit = 4;

  constructor(
    private deviceService: DevicesService,
    private route: ActivatedRoute
  ) {}

  isAuthenticated: boolean;
  listConfig: DeviceListConfig = {
    type: 'all',
    filters: {}
  };
  ngOnInit() {
    this.route.data.subscribe((data: { devices: Device }) => {
      this.devices = data.devices;

      // Load devices
      this.deviceService.getAll().subscribe(
        data => {
          console.log("res frontend devices:", data);
          this.devices = data;
        },
        err => {
          console.log("Error devices", err);
        }
      );
    });
  }

  /* @Input() limit: number; */
  @Input()
  set config(config: DeviceListConfig) {
    if (config) {
      this.query = config;
      this.currentPage = 1;
      this.runQuery();
    }
  }

  query: DeviceListConfig;
  results: Device[];
  loading = false;
  currentPage = 1;
  totalPages: Array<number> = [1];

  onSetPageTo(pageNumber: number) {
    console.error("pageNumber00", pageNumber);
    this.currentPage = pageNumber;
    this.runQuery();
  }

  onChange(e) {
    console.log("cambio de vista---", e.target.value);
    this.limit = parseInt(e.target.value);
    this.currentPage = 1;
    this.runQuery();
  }

  runQuery() {
    console.log("ENTRA RUNQUERY");
    this.loading = true;
    this.results = [];

    // Create limit and offset filter (if necessary)
    if (this.limit) {
      this.query.filters.limit = this.limit;
      this.query.filters.offset = this.limit * (this.currentPage - 1);
    }

    this.deviceService.query(this.query).subscribe(data => {
      this.loading = false;
      this.results = data.devices;
      console.log("device", data.devices);
      console.log("deviceLimit", this.limit);
      console.log("deviceQuery", this.query);
      // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
      this.totalPages = Array.from(
        new Array(Math.ceil(data.devicesCount / this.limit)),
        (val, index) => index + 1
      );
    });
  }

  

}
