import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  templateUrl: 'tabslogin.html'
})
export class TabsloginPage {
  rootPage: any;
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(public storage: Storage, public authService: AuthProvider) {
    console.log('coucou');
    this.authService.checkAuthentication().then((res)=>{
      console.log('res =', res);
      if (res === '' || res === null) {
        console.log('res ====')
        this.rootPage  = LoginPage;
      } else {
        this.rootPage  = TabsloginPage;
      }
    })
  }
}
