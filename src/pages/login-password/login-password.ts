import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-password',
  templateUrl: 'login-password.html',
})
export class LoginPasswordPage {
	_email: string;
	_password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this._email = this.navParams.get('email');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPasswordPage');
  }

  submit() {
  	console.info(this._email);
  	console.info(this._password);
  }

}
