 
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import {apiKey} from "../../app/apiurls/serverurls.js";
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  public token: any;
  public rootPage:any;
  constructor(public storage: Storage , public http: Http) {
  }

  login(user){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Headers', '*');
      headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
      headers.append('Accept','application/json');
      headers.append('content-type','application/json');
      
      
      this.http.post(apiKey+'auth/login?email='+user.email+'&password='+user.password, JSON.stringify(user), {headers: headers})
        .subscribe(res => {
          let data = res.json();   
          this.token = data.token;
          this.storage.set('token', data.token);
          this.http.get(apiKey+'user?token='+this.token).map(res => res.json().result).subscribe(data => {
            this.token = data;
            resolve(this.token)
          });
        }, (err) => {
          reject(err);
        }); 
      });
  }

  checkAuthentication(){
    return new Promise((resolve, reject) => {
      this.storage.get('token').then((value) => {
        this.token = value;
        resolve(this.token);
      }) 
    });        
  }

  logout(){
    this.token = null;
    this.storage.remove('token');
  }
}
