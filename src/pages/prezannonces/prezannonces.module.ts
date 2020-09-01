import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrezannoncesPage } from './prezannonces';

@NgModule({
  declarations: [
    PrezannoncesPage,
  ],
  imports: [
    IonicPageModule.forChild(PrezannoncesPage),
  ],
})
export class PrezannoncesPageModule {}
