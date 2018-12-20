import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators/map';

@Injectable()
export class FavouriteService {

  constructor(private apiService: ApiService) {}

  getFavourites(): Observable<[string]> {
    return this.apiService.get('/category')
      .pipe(map(data => {
        console.log("FavouriteService service", data);
        return data.categories;
      }));
  }
}
