import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import {apiKey} from "../../app/apiurls/serverurls.js";
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { AuthProvider } from '../../providers/auth/auth';
import { PrezavisPage } from '../prezavis/prezavis';


/**
 * Generated class for the MesAvisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mes-avis',
  templateUrl: 'mes-avis.html',
})
export class MesAvisPage {
  data = [];
  avis: any;
  user:any;
  id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
    public authService: AuthProvider,
    public storage: Storage,
    public http: Http) {
    this.user = this.storage.get('user');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MesAvisPage');
  }

  ajoutAvis(){

  let modal = this.modalCtrl.create('AjoutsAvisModalPage');
    modal.present();
  }

  //  voirAvis(data) {
  //    console.log(data);
  //   this.navCtrl.push(PrezavisPage, {
  //     avis:data
  //   });
  // }

  voirAvis(){
    this.storage.get("user").then((res)=>{
    let headers = new Headers();
  
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
  
      headers.append('Access-Control-Allow-Origin', '*');
      headers.append('Access-Control-Allow-Credentials', 'true');
      this.http.get(apiKey+'user/comments/'+res.id).map(res => res.json())
        .subscribe(comments => {
          this.avis = comments;
          console.log(comments);
          this.navCtrl.push(PrezavisPage, {
            comments:comments
          });
      });
    })
  }

}
