import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

@IonicPage()
@Component({
  selector: 'page-intro-slider',
  templateUrl: 'intro-slider.html',
})
export class IntroSliderPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public nTransitions: NativePageTransitions) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroSliderPage');
  }

  ionViewWillLeave() {
    let options: NativeTransitionOptions = {
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

  goToLogin() {
    this.navCtrl.setRoot('LoginPage');
  }

}