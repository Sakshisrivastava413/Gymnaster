import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoadingController, ToastController, AlertController } from 'ionic-angular';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {
    email: '',
    password: ''
  } as {
    email: string;
    password: string;
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              public alertCtrl: AlertController,
              public nTransitions: NativePageTransitions) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ionViewWillLeave() {
    let options: any = {
      direction: 'up',
      duration: 500,
      slowdownfactor: 3,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 150,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 60
    };
    this.nTransitions.slide(options);
  }

  login() {
    if (this.user.email == '' ||
      this.user.password == '') {
      this.toastCtrl.create({
        message: 'Error: Please Fill all fields.',
        duration: 1500
      }).present();
      return;
    }
    let loader = this.loadingCtrl.create({
      content: 'logging you in...',
      enableBackdropDismiss: false
    });
    loader.present();
    setTimeout(() => {
      loader.dismiss();
      this.toastCtrl.create({
        message: 'Logged in! Redirecting you to Home Page...',
        duration: 800
      }).present();
      setTimeout(() => {
        this.navCtrl.push('HealthInfoFormPage');
      }, 1000);
    }, 1000);
  }

  goToRegister() {
    this.navCtrl.setRoot('SignupPage');
  }

  forgotPassword() {
    this.alertCtrl.create({
      title: 'Forgot Password',
      inputs: [
        {
          name: 'email',
          placeholder: 'Enter your email',
          type: 'email',
          id: 'fp_email'
        }
      ],
      buttons: [
        {
          text: 'Send link',
          handler: () => {
            let elem: any = document.getElementById('fp_email');
            let value = elem.value;
            console.log(value);
          }
        }
      ],
      enableBackdropDismiss: true,
      cssClass: 'custom-alert'
    }).present();
  }

}