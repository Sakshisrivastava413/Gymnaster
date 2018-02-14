import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HealthInfoFormPage } from './health-info-form';

@NgModule({
  declarations: [
    HealthInfoFormPage,
  ],
  imports: [
    IonicPageModule.forChild(HealthInfoFormPage),
  ],
})
export class HealthInfoFormPageModule {}
