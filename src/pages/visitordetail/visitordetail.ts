import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Visitor } from '../../models/visitors';

@IonicPage()
@Component({
  selector: 'page-visitordetail',
  templateUrl: 'visitordetail.html',
})
export class VisitordetailPage {
  visitor: Visitor;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ngOnInit() {
    this.visitor = this.navParams.data;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
