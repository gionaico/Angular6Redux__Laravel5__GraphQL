import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';
import { map } from 'rxjs/operators/map';

@Injectable()
export class CategoryService {
  constructor (
    private apiService: ApiService
  ) {}

  getAll(): Observable<[string]> {
  	console.log("category service");
    return this.apiService.get('/category')
          .pipe(map(data => {
            console.log("category service",data);
            return data.categories;
          }));
  }

}
