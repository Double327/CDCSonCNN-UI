import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

/**
 * Module
 */
import {AppRoutingModule} from './app-routing.module';

/**
 * Components
 */
import {AppComponent} from './app.component';

/**
 * Service
 */
import {RequestService} from './service/request.service';
import {LoginComponent} from './views/login/login.component';
import {DashboardComponent} from './views/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
