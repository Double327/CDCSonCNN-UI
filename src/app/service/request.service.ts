import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(public http: HttpClient) {
  }

  get(data: any): any {
    this.http.get('asdf', data);
  }
}
