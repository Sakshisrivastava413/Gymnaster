import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoadingController, ToastController } from 'ionic-angular';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  user = {} as {
    name: string;
    age: number;
    email: string;
    password: string;
    confirmedPassword: string;
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              public nTransitions: NativePageTransitions) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
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

  register() {
    if (this.user.name == '' ||
        this.user.age == null ||
        this.user.email == '' ||
        this.user.password == '') {
      this.toastCtrl.create({
        message: 'Error: Please Fill all fields.',
        duration: 1500
      }).present();
      return;
    }
    let loader = this.loadingCtrl.create({
      content: 'Registering...',
      enableBackdropDismiss: false
    });
    loader.present();
    if (this.user.password != this.user.confirmedPassword) {
      loader.dismiss();
      this.toastCtrl.create({
        message: 'Error: Passwords didn\'t match.',
        duration: 2000
      }).present();
      return;
    }
    setTimeout(() => {
      loader.dismiss();
      this.toastCtrl.create({
        message: 'Registered! Redirecting you to Home Page...',
        duration: 1800
      }).present();
      setTimeout(() => {
        this.navCtrl.push('HealthInfoFormPage');
      }, 2000);
    }, 1000);
  }
  
  goToLogin() {
    this.navCtrl.setRoot('LoginPage');
  }

}