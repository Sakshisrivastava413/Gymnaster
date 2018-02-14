import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NativePageTransitions } from '@ionic-native/native-page-transitions';

@IonicPage()
@Component({
  selector: 'page-health-info-form',
  templateUrl: 'health-info-form.html',
})
export class HealthInfoFormPage {

  user = {
    name: '',
    gender: ''
  } as {
    name: string;
    gender: string;
    dob: string;
    weight: number;
    height: number;
    goal: number;
  };

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public nTransitions: NativePageTransitions) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HealthInfoFormPage');
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

  goToHome() {
    this.navCtrl.setRoot('HomePage');
  }

}