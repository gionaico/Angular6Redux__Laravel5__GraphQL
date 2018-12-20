import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';
import { Device, DeviceListConfig } from '../models';
import { map } from 'rxjs/operators/map';

@Injectable()
export class DevicesService {
  constructor(
    private apiService: ApiService
  ) { }

  query(config: DeviceListConfig): Observable<{ devices: Device[], devicesCount: number }> {
    // Convert any filters over to Angular's URLSearchParams
    const params = {};

    Object.keys(config.filters)
      .forEach((key) => {
        params[key] = config.filters[key];
      });

    return this.apiService
      .get(
        '/devices',
        new HttpParams({ fromObject: params })
      );
  }

  getAll(): Observable<Device> {
    return this.apiService.get('/devices')
      .pipe(map(data => data.devices));
  }

  detail(slug): Observable<Device> {
    return this.apiService.get('/devices/' + slug)
      .pipe(map(data => data.devices));
  }

  save(article): Observable<string> {
    console.log("service contacts", article);
    return this.apiService.get('/tags')
      .pipe(map(data => data.tags));
  }

}
