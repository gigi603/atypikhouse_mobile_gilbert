import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http} from '@angular/http';
//import {apiKey} from "../../app/apiurls/serverurls.js";
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the PrezannoncesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prezannonces',
  templateUrl: 'prezannonces.html',
})
export class PrezannoncesPage {
  data = [];
  house: any;
  proprietes: any
  user:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthProvider,
    public storage: Storage,
    public http: Http) {
      this.house = navParams.get('house');
      this.user = this.storage.get('user');
      console.log(this.house);
      this.proprietes = this.house.proprietes;
      console.log('proprietes', this.proprietes);
  }

  ionViewDidLoad() {
  }

}
