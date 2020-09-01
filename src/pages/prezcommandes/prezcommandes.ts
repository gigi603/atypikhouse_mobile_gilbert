import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http} from '@angular/http';
//import {apiKey} from "../../app/apiurls/serverurls.js";
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the PrezcommandesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prezcommandes',
  templateUrl: 'prezcommandes.html',
})
export class PrezcommandesPage {
  data = [];
  reservation: any;
  proprietes: any;
  //category: any;
  user:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthProvider,
    public storage: Storage,
    public http: Http) {
    this.reservation = navParams.get('reservation');
    this.user = this.storage.get('user');
    this.proprietes = this.reservation.proprietes;
    //this.category = this.reservation.house.category;
    console.log(this.reservation)
    //console.log(this.reservation.category);
  }

  ionViewDidLoad() {
  }

}
