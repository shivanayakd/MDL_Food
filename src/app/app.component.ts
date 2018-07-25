import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase/app';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { VisitortabsPage } from '../pages/visitortabs/visitortabs';
import { DepalletizertabsPage } from '../pages/depalletizertabs/depalletizertabs';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  about: any = AboutPage;
  visitorRecords = VisitortabsPage;
  depallatizer = DepalletizertabsPage;

  @ViewChild('nav') nav: NavController; 

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    firebase.initializeApp({
      apiKey: "AIzaSyD30K0_AuQ6ffESyqQFje_h_yrHlJk-ymo",
      authDomain: "mglfood-94f14.firebaseapp.com",
      databaseURL: "https://mglfood-94f14.firebaseio.com",
      projectId: "mglfood-94f14",
      storageBucket: "mglfood-94f14.appspot.com",
      messagingSenderId: "344651757632"
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page);
  }
}

