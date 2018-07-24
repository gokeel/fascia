import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Storage } from '@ionic/storage';


// import { HomePage } from '../pages/home/home';
import { IntroSlidePage } from '../pages/intro-slide/intro-slide';
import { LoginRegisterPage } from '../pages/login-register/login-register';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = IntroSlidePage;
  rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private screenOrientation: ScreenOrientation, private storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      // setting the session

      splashScreen.hide();
    });

    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

    this.screenOrientation.onChange().subscribe(
       () => {
           console.log("Orientation Changed");
       }
    );

    // enable ini untuk tes slider
    // storage.set('slider_after_install', null);

    storage.get('slider_after_install').then((val_after_install) => {
      if(val_after_install=="on" || val_after_install=="off"){
        storage.set('slider_after_install', 'off');
        this.rootPage = LoginRegisterPage;
      }
      else if(val_after_install==null){
        storage.set('slider_after_install', 'on');
        this.rootPage = IntroSlidePage;
      }
    });
  }
}

