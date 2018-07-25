import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VisitorlistPage } from '../visitorlist/visitorlist';
import { VisitoraddPage } from './../visitoradd/visitoradd';

@IonicPage()
@Component({
  selector: 'page-visitortabs',
  templateUrl: 'visitortabs.html',
})
export class VisitortabsPage {
  tab1Root = VisitorlistPage;
  tab2Root = VisitoraddPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisitortabsPage');
  }

}
