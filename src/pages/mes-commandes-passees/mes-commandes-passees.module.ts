import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MesCommandesPasseesPage } from './mes-commandes-passees';

@NgModule({
  declarations: [
    MesCommandesPasseesPage,
  ],
  imports: [
    IonicPageModule.forChild(MesCommandesPasseesPage),
  ],
})
export class MesCommandesPasseesPageModule {}
