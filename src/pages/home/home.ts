import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';
import { TabsloginPage } from '../tabslogin/tabslogin';
import { MesAlertesPage } from '../mes-alertes/mes-alertes';
import { MesAvisPage } from '../mes-avis/mes-avis';
import { MesAnnoncesPage } from '../mes-annonces/mes-annonces';
import { MesCommandesPage } from '../mes-commandes/mes-commandes';
import { MesCommandesPasseesPage } from '../mes-commandes-passees/mes-commandes-passees';
import { MesCommandesAnnuleesPage } from '../mes-commandes-annulees/mes-commandes-annulees';
import { AuthProvider } from '../../providers/auth/auth';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  rootPage: any;
  token: any;
  constructor(public navCtrl: NavController,public navParams: NavParams, public app: App, public authService: AuthProvider,
    public storage: Storage) {

  }

  myLogout(){
    this.authService.logout();
    this.app.getRootNav().setRoot(LoginPage);
    // this.navCtrl.push(LoginPage);
    console.log(this.token);
   
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
