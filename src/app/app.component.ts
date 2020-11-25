import {Component} from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CDCSonCNN-UI';

  public data: any;

  getData(): void {
    axios.get('/api/system/user/1').then(data => {
      this.data = data;
    });
  }
}
