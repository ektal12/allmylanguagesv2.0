import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DataStoreProvider } from '../providers/data-store/data-store';
import { IonicStorageModule } from '@ionic/storage';
import { ProcessTextProvider } from '../providers/process-text/process-text';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // IonicModule.forRoot(MyApp, {
    //   platforms: {
    //     ios: {
    //       scrollAssist: false,
    //       autoFocusAssist: false
    //     },
    //     android: {
    //       scrollAssist: false,
    //       autoFocusAssist: false
    //     }
    //   }
    // }),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataStoreProvider,
    ProcessTextProvider
  ]
})
export class AppModule {}
