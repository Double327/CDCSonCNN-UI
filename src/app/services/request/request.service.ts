import {Injectable} from '@angular/core';
import axios from 'axios';
import {TokenService} from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  public service = axios.create({
    baseURL: '/api',
    timeout: 3000
  });

  constructor(tokenService: TokenService) {
    this.service.interceptors.request.use(
      config => {
        const token = tokenService.get('CDCSonCNNToken');
        if (token) {
          config.headers.token = token;
        }
        return config;
      }
    );
    this.service.interceptors.response.use(response => {
      const code = response.data.code;
      if (code < 200 || code > 300) {
        return Promise.reject('error');
      } else {
        return response.data;
      }
    }, error => {
      let code = 0;
      try {
        code = error.response.data.code;
      } catch (e) {
        if (error.toString().indexOf('Error: timeout') !== -1) {
          console.log('网络请求超时');
          return Promise.reject(error);
        }
        if (error.toString().indexOf('Error: Network Error') !== -1) {
          console.log('网络请求错误');
          return Promise.reject(error);
        }
      }
      if (code === 401) {
        console.log('401登录过期');
      } else if (code === 403) {
      } else {
        console.log('其他错误');
      }
      return Promise.reject(error);
    });
  }
}
