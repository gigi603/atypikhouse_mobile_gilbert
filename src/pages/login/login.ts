import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import { IonicPage, NavController,AlertController, NavParams  } from 'ionic-angular';
import { Http} from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

import { AuthProvider } from '../../providers/auth/auth';
import { TabsloginPage } from '../tabslogin/tabslogin';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  email:string = '';
  password:string = '';
  token:string;
  errorMsg:string;
  result:string;
  rootPage:any;
  tabsPage:any;



  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthProvider , public alertCtrl: AlertController,  
  public http: Http,
  public storage: Storage,
  public app: App) {
  }

  ionViewDidLoad() {
  }


  errorFunc(message){
    let alert = this.alertCtrl.create({
      title: "Désolé Il y a une erreur",
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }



  myLogin(){
    if(this.email.trim() == "" && this.password.trim() == ""){
      this. errorFunc("Vous n'avez pas remplis les champs")
    }
    else if (this.email.trim() == "") {
      this. errorFunc("Veuillez saisir une adresse email")
    }
    else if (this.password.trim() == '') {
        this.errorFunc('Veuillez saisir un mot de passe')
    } else {
      let user = {
        email: this.email,
        password: this.password
      };

      this.authService.login(user).then((result) => {
        this.storage.set('user', result)       
        this.navCtrl.push(TabsloginPage, {
          user : result,
        });
        this.navCtrl.setRoot(TabsloginPage);
      }, (err) => {
      this. errorFunc('Votre identifiant ou votre mot de passe est incorrect')
      });
    }
  }
}
