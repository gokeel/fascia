import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

import { LoginRegisterPage } from '../login-register/login-register';

/**
 * Generated class for the IntroSlidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro-slide',
  templateUrl: 'intro-slide.html',
})
export class IntroSlidePage {

	@ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  slideChanged() {
    let isEnd = this.slides.isEnd();
    if(isEnd)
    	this.slides.pager = false;
    else
    	this.slides.pager = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroSlidePage');
  }

  open_patient(){
  	this.navCtrl.setRoot(LoginRegisterPage);
  }
}
