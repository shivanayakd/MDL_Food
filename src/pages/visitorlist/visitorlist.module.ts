import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisitorlistPage } from './visitorlist';

@NgModule({
  declarations: [
    VisitorlistPage,
  ],
  imports: [
    IonicPageModule.forChild(VisitorlistPage),
  ],
})
export class VisitorlistPageModule {}
