import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {ShowComponent} from './page/show/show.component';
import {HomeComponent} from './page/home/home.component';
import {LoginComponent} from './page/login/login.component';
import {NStudentComponent} from './components/n-student/n-student.component';
import {NTeacherComponent} from './components/n-teacher/n-teacher.component';
import {NAdminComponent} from './components/n-admin/n-admin.component';
import {UserinfoComponent} from './components/userinfo/userinfo.component';
import {SiderComponent} from './components/sider/sider.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShowComponent,
    HomeComponent,
    LoginComponent,
    NStudentComponent,
    NTeacherComponent,
    NAdminComponent,
    UserinfoComponent,
    SiderComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
