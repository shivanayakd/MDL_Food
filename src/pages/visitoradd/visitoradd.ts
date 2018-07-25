import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, ToastController } from 'ionic-angular';
import { VisitorsService } from '../../providers/visitors';

@IonicPage()
@Component({
  selector: 'page-visitoradd',
  templateUrl: 'visitoradd.html',
})
export class VisitoraddPage {
  visitorForm: FormGroup;
  constructor(public navCtrl: NavController,
    public visCtrl: VisitorsService,
     public loadingCtrl: LoadingController,
     public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisitoraddPage');
  }

  ngOnInit() {
    this.initializeForm();
  }  

  initializeForm() {
    this.visitorForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'company': new FormControl(null, Validators.required),
      'date': new FormControl(null, Validators.required),
      'visitingPerson': new FormControl(null, Validators.required),
      'illness': new FormControl(null, Validators.required),
      'timein': new FormControl(null, Validators.required),
      'timeout': new FormControl(null, Validators.required)
    });
  }

  onSubmit(){
    const loader = this.loadingCtrl.create({
      content: "Adding Visitor...",
    });
    loader.present();
    console.log('values submitted', this.visitorForm.value);
    this.visCtrl.addVisitors(this.visitorForm.value).subscribe((data) => {
      this.visitorForm.reset();
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
