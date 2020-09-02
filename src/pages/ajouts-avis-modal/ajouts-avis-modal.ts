import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { Http, Headers} from '@angular/http';
import {apiKey} from "../../app/apiurls/serverurls.js";
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { AuthProvider } from '../../providers/auth/auth';
import { CrudProvider } from '../../providers/crud/crud';
/**
 * Generated class for the AjoutsAvisModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajouts-avis-modal',
  templateUrl: 'ajouts-avis-modal.html',
})
export class AjoutsAvisModalPage {
  reservations:any;
  user:any;
  id: any;
  comments: any;
  myComment = {
    user_id : null
  };
  public token: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthProvider, 
    public alertCtrl: AlertController,
    public storage: Storage,
    public http: Http,
    public crudProvider:CrudProvider) {
    this.storage.get("user").then((res)=>{
      this.user = res;
    })
    this.getReservations();
  }

  ionViewDidLoad() {
  }

  postComment() {
    this.myComment.user_id = this.user.id;
    this.crudProvider.postAvis(this.myComment).then((result)=>{});
    this.alertSuccess("Votre commentaire a bien été ajouté");
  }

  alertSuccess(message){
    let alert = this.alertCtrl.create({
      title: message,
      buttons: ['OK']
    });
    alert.present();
  }

  getReservations(){
    this.storage.get("user").then((res)=>{
    let headers = new Headers();
  
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
  
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Credentials', 'true');
      this.http.get(apiKey+'user/allreservationsnonannulees/'+res.id).map(res => res.json())
        .subscribe(data => {
          this.reservations = data;
      });
    })
  }


}