import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MesAlertesPage } from './mes-alertes';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MesAlertesPage,
  ],
  imports: [
    IonicPageModule.forChild(MesAlertesPage),
    HttpModule,
  ],
})
export class MesAlertesPageModule {}
