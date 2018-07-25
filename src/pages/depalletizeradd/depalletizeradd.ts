import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DepalletizerService } from '../../providers/depalletizer';

@IonicPage()
@Component({
  selector: 'page-depalletizeradd',
  templateUrl: 'depalletizeradd.html',
})
export class DepalletizeraddPage implements OnInit {
  depalletizerForm: FormGroup;
  operators = ['Operator1','Operator2','Operator3','Operator4'];
  constructor(public navCtrl: NavController,
    private toastCtrl: ToastController,   public palletizerCtrl: DepalletizerService,
    public loadingCtrl: LoadingController, public navParams: NavParams) {
  }
  ngOnInit() {
    this.initilizeForm();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DepalletizerAddPage');
  }

  private initilizeForm() {
    this.depalletizerForm = new FormGroup({
      'date': new FormControl(null, Validators.required),
      'operator': new FormControl(null, Validators.required),
      'product': new FormControl(null, Validators.required),
      'bottlewaste': new FormControl(null, Validators.required),
      'sno': new FormControl(null, Validators.required),
      'pno': new FormControl(null, Validators.required),
      'pqty': new FormControl(null, Validators.required),
      'lboards': new FormControl(null, Validators.required),
      'tboards': new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log('submit-->', this.depalletizerForm.value);
    const loader = this.loadingCtrl.create({
      content: "Adding Visitor...",
    });
    loader.present();
    const FormattedData = {
      'date': this.depalletizerForm.value.date,
      'operator': this.depalletizerForm.value.operator,
      'product': this.depalletizerForm.value.product,
      'bottlewaste': this.depalletizerForm.value.bottlewaste,
      'records' : {
        'sno': this.depalletizerForm.value.sno,
        'pno': this.depalletizerForm.value.pno,
        'pqty': this.depalletizerForm.value.pqty,
        'lboards': this.depalletizerForm.value.lboards,
        'tboards': this.depalletizerForm.value.tboards
      }
    }
    console.log('values Formatted', FormattedData);
    // this.palletizerCtrl.addDepalletizer(FormattedData);
    this.palletizerCtrl.addDepalletizer(FormattedData).subscribe((data) => {
      this.depalletizerForm.reset({
      'date': this.depalletizerForm.value.date,
      'operator': this.depalletizerForm.value.operator,
      'product': this.depalletizerForm.value.product,
      'bottlewaste': this.depalletizerForm.value.bottlewaste,
      'sno': '',
      'pno': '',
      'pqty': '',
      'lboards': '',
      'tboards': '',
      });
      loader.dismiss();
      const toast = this.toastCtrl.create({
        message: 'Visitor added successfully',
        duration: 2000,
        position: 'top'
      });
      toast.present();
    });
  }
}
