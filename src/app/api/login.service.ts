import {Injectable} from '@angular/core';
import {RequestService} from '../services/request/request.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private request: RequestService) {
  }

  public login(info: any): any {
    return this.request.service.request({
      url: '/login',
      method: 'post',
      params: info
    });
  }

  public getCaptcha(): any {
    return this.request.service.request({
      url: '/captchaImage'
    });
  }
}
