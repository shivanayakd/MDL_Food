import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VisitordetailPage } from '../pages/visitordetail/visitordetail';
import { VisitortabsPage } from './../pages/visitortabs/visitortabs';
import { VisitorlistPage } from './../pages/visitorlist/visitorlist';
import { VisitoraddPage } from './../pages/visitoradd/visitoradd';
import { DepalletizerlistPage } from '../pages/depalletizerlist/depalletizerlist';
import { DepalletizeraddPage } from './../pages/depalletizeradd/depalletizeradd';
import { DepalletizertabsPage } from './../pages/depalletizertabs/depalletizertabs';
import { AboutPage } from './../pages/about/about';
import { VisitorsService } from '../providers/visitors';
import { DepalletizerService } from '../providers/depalletizer';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VisitorlistPage,
    VisitoraddPage,
    VisitortabsPage,
    VisitordetailPage,
    AboutPage,
    DepalletizertabsPage,
    DepalletizeraddPage,
    DepalletizerlistPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VisitorlistPage,
    VisitoraddPage,
    VisitordetailPage,
    VisitortabsPage,
    AboutPage,
    DepalletizertabsPage,
    DepalletizeraddPage,
    DepalletizerlistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    VisitorsService,
    DepalletizerService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
