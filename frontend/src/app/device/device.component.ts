import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Device, DevicesService, CartService, UserService, User } from '../core';

@Component({
  selector: 'app-device-page',
  templateUrl: './device.component.html',
  styleUrls: ["./device.component.sass"]
})

export class DeviceComponent implements OnInit {

  devices: Device[] = {} as Device[];
  device: { slug: string };
  errors: Object = {};
  isSubmitting = false;
  currentUser: User;
  prodVisited: [];
  constructor(
    private cartService: CartService,
    private deviceService: DevicesService,
    private userService: UserService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.device = {
      slug: this.route.snapshot.params.slug
    };
    this.getProdVisited();
    // Retreive the prefetched device
    this.route.data.subscribe(
      (data: { devices: Device[] }) => {
        this.devices = data.devices;
        console.log("YEEEE DEVICE", this.device.slug);
        // Load device by slug
        this.deviceService.detail(this.device.slug)
          .subscribe(
            data => {
              console.log("res frontend devices:", data);
              this.devices = [data];
              this.setProdVisited(data);
            },
            err => {
              console.log("Error devices", err);

            }
          );
      }
    );
  }

  getProdVisited() {
    this.userService.currentUser.subscribe((userData: User) => { this.currentUser = userData; });
    let prod = JSON.parse(localStorage.getItem(this.currentUser.username));
    return this.prodVisited = prod;
  }

  setProdVisited(prods: Device) {
    this.userService.currentUser.subscribe((userData: User) => { this.currentUser = userData; });
    if (localStorage.getItem(this.currentUser.username)) {
      let array = []; let prod = JSON.parse(localStorage.getItem(this.currentUser.username));
      array.push(prods, ...prod);
      // check if the product already exist
      prod.map(element => {
        if (element.slug == prods.slug) array.splice(array.indexOf(prods), 1);
      });
      // delete last position array (we want show the 5 last products)
      if(array.length>5) array.pop();
      
      localStorage.setItem(this.currentUser.username, JSON.stringify([...array]));

    }else localStorage.setItem(this.currentUser.username, JSON.stringify([prods]));
    
  }

  addCart(Product) {
    console.log("DEVICE PROD", Product);
    this.cartService.addItem(Product);
  }
}

