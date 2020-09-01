import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import {apiKey} from "../../app/apiurls/serverurls.js";
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { AuthProvider } from '../../providers/auth/auth';
import { PrezannoncesPage } from '../prezannonces/prezannonces';

/**
 * Generated class for the MesCommandesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mes-annonces',
  templateUrl: 'mes-annonces.html',
})
export class MesAnnoncesPage {
  data = [];
  houses: any;
  user:any;
  id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthProvider,
    public modalCtrl: ModalController,
    public storage: Storage,
    public http: Http) {
      this.user = this.storage.get('user');
      console.log(this.user);
      this.getHouses();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MesCommandesPage');
  }

  comment(){
  	let modal = this.modalCtrl.create('AjoutsAvisModalPage');
    modal.present();

  }

  voir(house){
    this.navCtrl.push(PrezannoncesPage, {
      house:house
    });
  }

  getHouses(){
    this.storage.get("user").then((res)=>{
    let headers = new Headers();
  
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
  
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Credentials', 'true');
      this.http.get(apiKey+'mylocations/'+res.id).map(res => res.json())
        .subscribe(data => {
          this.houses = data;
      });
    })
  }

}
