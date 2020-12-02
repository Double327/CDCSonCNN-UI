import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../api/login.service';
import {TokenService} from '../../services/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userInfo: any = {
    no: '18090255',
    password: '123456',
    code: 'asdf',
    uuid: ''
  };

  public codeImg: string;

  constructor(private loginApi: LoginService, private tokenService: TokenService) {
    this.handleGetCode();
  }


  ngOnInit(): void {
  }

  public handleLogin(): void {
    this.loginApi.login(this.userInfo).then(res => {
      if (res.code === '200') {
        this.tokenService.set('CDCSonCNNToken', res.token);
      } else {
        this.handleGetCode();
      }
    });
  }

  public handleGetCode(): void {
    this.loginApi.getCaptcha().then(res => {
      this.userInfo.uuid = res.uuid;
      this.codeImg = res.img;
    });
  }
}
