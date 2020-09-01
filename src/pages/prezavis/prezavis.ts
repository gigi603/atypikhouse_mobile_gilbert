import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the PrezavisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prezavis',
  templateUrl: 'prezavis.html',
})
export class PrezavisPage {
  comments = [];
  avis: any;
  user:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthProvider,
    public storage: Storage,
    public http: Http) {
    this.comments = this.navParams.get('comments');
    this.user = this.storage.get('user');
  }

  ionViewDidLoad() {
  }

}
