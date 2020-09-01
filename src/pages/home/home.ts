import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

import { MesAlertesPage } from '../mes-alertes/mes-alertes';
import { MesAvisPage } from '../mes-avis/mes-avis';
import { MesAnnoncesPage } from '../mes-annonces/mes-annonces';
import { MesCommandesPage } from '../mes-commandes/mes-commandes';
import { MesCommandesPasseesPage } from '../mes-commandes-passees/mes-commandes-passees';
import { MesCommandesAnnuleesPage } from '../mes-commandes-annulees/mes-commandes-annulees';
import { LoginPage } from '../login/login';
import { AuthProvider } from '../../providers/auth/auth';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController,public navParams: NavParams, public app: App, public authService: AuthProvider) {

  }

  myLogout(){
    this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
  }

  GoNotifications(){
    this.navCtrl.push(MesAlertesPage);

  }

  GoAnnonces(){
    this.navCtrl.push(MesAnnoncesPage);

  }

  GoCommandes(){
    this.navCtrl.push(MesCommandesPage);

  }

  GoCommandesPassees(){
    this.navCtrl.push(MesCommandesPasseesPage);

  }

  GoCommandesAnnulees(){
    this.navCtrl.push(MesCommandesAnnuleesPage);

  }

  GoAvis(){
    this.navCtrl.push(MesAvisPage);

  }

}
