import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { Visitor } from '../../models/visitors';
import { VisitorsService } from '../../providers/visitors';
import { VisitordetailPage } from '../visitordetail/visitordetail';

@IonicPage()
@Component({
  selector: 'page-visitorlist',
  templateUrl: 'visitorlist.html',
})
export class VisitorlistPage {
  visitors: Visitor[] = [];
  loader: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController,
    public visCtrl: VisitorsService,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidEnter() {
    this.loader = this.loadingCtrl.create({
      content: "Loading visitors...",
      spinner: "crescent"
    });
    this.loader.present();
    this.visCtrl.getVisitorsArray().subscribe((data: Visitor[]) => {
      console.log('data -->', data);
      this.visitors = [];
      for(let d in data) {
        this.visitors.push(data[d]);
      }
      this.loader.dismiss();
    });
  }

  openModal(visitor: Visitor) {
    let modal = this.modalCtrl.create(VisitordetailPage, visitor);
    modal.present();
  }
}
