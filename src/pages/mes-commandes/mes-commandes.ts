import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Http, Headers} from '@angular/http';
import {apiKey} from "../../app/apiurls/serverurls.js";
import { Storage } from '@ionic/storage';
import { AuthProvider } from '../../providers/auth/auth';
import { PrezcommandesPage } from '../prezcommandes/prezcommandes';

/**
 * Generated class for the MesCommandesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mes-commandes',
  templateUrl: 'mes-commandes.html',
})
export class MesCommandesPage {
  data = [];
  reservations:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
  public authService: AuthProvider, public storage: Storage, public http: Http) {
    this.getReservations();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MesCommandesPage');
  }

  voir(reservation){
    this.navCtrl.push(PrezcommandesPage, {
      reservation: reservation
    });
  }

  // supprimer(reservation){

  // }
  getReservations(){
    this.storage.get("user").then((res)=>{
    let headers = new Headers();
  
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
  
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Credentials', 'true');
      this.http.get(apiKey+'user/reservations/'+res.id).map(res => res.json())
        .subscribe(data => {
          this.reservations = data;
      });
    })
  }

}
