import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http'; 


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { CrudProvider } from '../providers/crud/crud';


import { IonicStorageModule } from '@ionic/storage';
import { LoginPage } from '../pages/login/login';
import { TabsloginPage } from '../pages/tabslogin/tabslogin';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { MesAlertesPage } from '../pages/mes-alertes/mes-alertes';
import { MesAvisPage } from '../pages/mes-avis/mes-avis';
import { MesAnnoncesPage } from '../pages/mes-annonces/mes-annonces';
import { MesCommandesPage } from '../pages/mes-commandes/mes-commandes';
import { MesCommandesPasseesPage } from '../pages/mes-commandes-passees/mes-commandes-passees';
import { MesCommandesAnnuleesPage } from '../pages/mes-commandes-annulees/mes-commandes-annulees';
import { PrezannoncesPage } from '../pages/prezannonces/prezannonces';
import { PrezcommandesPage } from '../pages/prezcommandes/prezcommandes';
import { PrezavisPage } from '../pages/prezavis/prezavis';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    TabsloginPage,
    MesAlertesPage,
    MesAvisPage,
    MesAnnoncesPage,
    MesCommandesPage,
    MesCommandesPasseesPage,
    MesCommandesAnnuleesPage,
    PrezannoncesPage,
    PrezcommandesPage,
    PrezavisPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()  ,
    HttpModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    TabsloginPage,
    MesAlertesPage,
    MesAvisPage,
    MesAnnoncesPage,
    MesCommandesPage,
    MesCommandesPasseesPage,
    MesCommandesAnnuleesPage,
    PrezannoncesPage,
    PrezcommandesPage,
    PrezavisPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    CrudProvider
  ]
})
export class AppModule {}
