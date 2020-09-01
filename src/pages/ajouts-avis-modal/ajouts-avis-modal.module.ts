import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjoutsAvisModalPage } from './ajouts-avis-modal';

@NgModule({
  declarations: [
    AjoutsAvisModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AjoutsAvisModalPage),
  ],
})
export class AjoutsAvisModalPageModule {}
