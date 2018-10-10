import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { Lesson } from '../../models/lesson';
import { ProcessTextProvider } from '../../providers/process-text/process-text';
import { DataStoreProvider } from '../../providers/data-store/data-store';
import { HomePage } from '../home/home';



@IonicPage()
@Component({
  selector: 'page-add-a-text',
  templateUrl: 'add-a-text.html',
})
export class AddATextPage {

  myLesson = {
    id: 'id' + new Date().toISOString(),
    date: new Date().toISOString(),
    shortDescription: "",
    lessonText: ""
  } as Lesson

  constructor(private navCtrl: NavController, 
    private processTextProvider: ProcessTextProvider,
    private dataStore: DataStoreProvider,
    private toastCtrl: ToastController

        ) {

  }

  saveNewText() {
    if (this.myLesson.lessonText == '') {
      
      let toast =  this.toastCtrl.create({
        message: 'Sorry! You need to add some text for the app to work on.  Paste it into the box!',
        duration: 3000,
        position: 'middle'
      });
      toast.present();

    } else {
      let processedLesson = this.processTextProvider.processText(this.myLesson)
      
      if (processedLesson.shortDescription == '') {
        if (processedLesson.sentenceArray[0]) {
          processedLesson.shortDescription = processedLesson.sentenceArray[0].sentenceText
        } else {
          console.log('stop')
        }

      }

      this.dataStore.saveNewText(processedLesson)

      this.navCtrl.pop()
    }



   
  }

  back() {
    this.navCtrl.setRoot(HomePage)
  }
}
