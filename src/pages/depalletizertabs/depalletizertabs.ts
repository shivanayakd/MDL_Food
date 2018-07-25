import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DepalletizeraddPage } from '../depalletizeradd/depalletizeradd';
import { DepalletizerlistPage } from '../depalletizerlist/depalletizerlist';


@IonicPage()
@Component({
  selector: 'page-depalletizertabs',
  templateUrl: 'depalletizertabs.html',
})
export class DepalletizertabsPage {
  tab1Root = DepalletizerlistPage;
  tab2Root = DepalletizeraddPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DepalletizertabsPage');
  }

}
