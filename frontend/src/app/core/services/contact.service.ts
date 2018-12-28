import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';
import { ContactModel } from '../models';
import { map } from 'rxjs/operators/map';

@Injectable()
export class ContactService {
  constructor (
    private apiService: ApiService
  ) {}

  Contact(contact): Observable<[ContactModel]> {
  	console.log("contact service",contact);
    return this.apiService.post('/contact', {contact:contact})
      .pipe(map(data => data));
  }

}
