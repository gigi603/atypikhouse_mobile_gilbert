import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import {apiKey} from "../../app/apiurls/serverurls.js";
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the MesAlertesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



@IonicPage()
@Component({
  selector: 'page-mes-alertes',
  templateUrl: 'mes-alertes.html',
})
export class MesAlertesPage {
alertes: any;
data = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthProvider,
    public storage: Storage,
    public http: Http) {
      this.alertes = navParams.get('data');
      this.getAlertes();
    }

  ionViewDidLoad() {
  }

  getAlertes(){
    this.storage.get("user").then((res)=>{
    let headers = new Headers();
  
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
  
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Credentials', 'true');
      this.http.get(apiKey+'user_messages/'+res.id).map(res => res.json())
        .subscribe(data => {
          this.alertes = data;
      });
    })
  }
  	
}
