import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Injectable, Injector } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { IonicStorageModule } from '@ionic/storage';
import { Pro } from '@ionic/pro';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IntroSlidePage } from '../pages/intro-slide/intro-slide';
import { LoginRegisterPage } from '../pages/login-register/login-register';
import { LoginPage } from '../pages/login/login';
import { LoginPasswordPage } from '../pages/login-password/login-password';
import { RegisterPage } from '../pages/register/register';

Pro.init('6F307770', {
  appVersion: '1.0.1'
})

@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch(e) {
      // Unable to get the IonicErrorHandler provider, ensure
      // IonicErrorHandler has been added to the providers list below
    }
  }

  handleError(err: any): void {
    Pro.monitoring.handleNewError(err);
    // Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IntroSlidePage,
    LoginRegisterPage, LoginPage, RegisterPage, LoginPasswordPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IntroSlidePage,
    LoginRegisterPage, LoginPage, RegisterPage, LoginPasswordPage
  ],
  providers: [
    ScreenOrientation,
    StatusBar,
    SplashScreen,
    IonicErrorHandler,
    // {provide: ErrorHandler, useClass: IonicErrorHandler}
    [{ provide: ErrorHandler, useClass: MyErrorHandler }]
  ]
})
export class AppModule {}
