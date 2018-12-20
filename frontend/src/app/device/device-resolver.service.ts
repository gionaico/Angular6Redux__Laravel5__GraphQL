import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Article, DevicesService, UserService } from '../core';
import { catchError } from 'rxjs/operators/catchError';

@Injectable()
export class DeviceResolver {
  constructor(
    private devicesService: DevicesService,
    private router: Router,
    private userService: UserService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.devicesService.getAll()
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }
}
