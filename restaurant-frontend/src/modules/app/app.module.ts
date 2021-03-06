import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarManagerComponent } from './components/navbar-manager/navbar-manager.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Interceptor } from './interceptors/interceptor.interceptor';
import { AuthService } from './services/auth.service';
import { ManagerModule } from '../manager/manager.module';
import { BaseLayoutComponent } from './pages/base-layout/base-layout.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarWaiterComponent } from './components/navbar-waiter/navbar-waiter.component';
import { NavbarCookComponent } from './components/navbar-cook/navbar-cook.component';
import { NavbarBartenderComponent } from './components/navbar-bartender/navbar-bartender.component';
import { NavbarDirectorComponent } from './components/navbar-director/navbar-director.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { DirectorModule } from '../director/director.module';
import { BartenderModule } from '../bartender/bartender.module';
import { WaiterModule } from '../waiter/waiter.module';
import { CookModule } from '../cook/cook.module';
import { HeadBartenderModule } from '../head-bartender/head-bartender.module';
import { ChefModule } from '../chef/chef.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { ChangePasswordModalComponent } from './modals/change-password-modal/change-password-modal.component';
import { FormsModule } from '@angular/forms';
import { WebSocketService } from '../app/services/WebSocketService';

@NgModule({
  declarations: [
    AppComponent,
    NavbarManagerComponent,
    LoginComponent,
    BaseLayoutComponent,
    NotFoundComponent,
    NavbarWaiterComponent,
    NavbarCookComponent,
    NavbarBartenderComponent,
    NavbarDirectorComponent,
    ChangePasswordModalComponent,
    ProfileInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ManagerModule,
    DirectorModule,
    BartenderModule,
    WaiterModule,
    CookModule,
    HeadBartenderModule,
    ChefModule,
    BrowserAnimationsModule,
    OverlayModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
    }),
    FormsModule,
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
    WebSocketService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [ChangePasswordModalComponent],
})
export class AppModule {}
