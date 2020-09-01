import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MesCommandesAnnuleesPage } from './mes-commandes-annulees';

@NgModule({
  declarations: [
    MesCommandesAnnuleesPage,
  ],
  imports: [
    IonicPageModule.forChild(MesCommandesAnnuleesPage),
  ],
})
export class MesCommandesAnnuleesPageModule {}
