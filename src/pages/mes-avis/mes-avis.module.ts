import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MesAvisPage } from './mes-avis';
//import { AjoutsAvisModalPage } from '../ajouts-avis-modal/ajouts-avis-modal';

@NgModule({
  declarations: [
    MesAvisPage,
  ],
  imports: [
    IonicPageModule.forChild(MesAvisPage),
  ],
})
export class MesAvisPageModule {}
