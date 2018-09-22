import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Lesson } from '../../models/lesson';
import { ProcessTextProvider } from '../../providers/process-text/process-text';
import { DataStoreProvider } from '../../providers/data-store/data-store';



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

        ) {

  }

  saveNewText() {
    let processedLesson =  this.processTextProvider.processText(this.myLesson)
    console.log(processedLesson)
    this.dataStore.saveNewText(processedLesson)
    
    this.navCtrl.pop()
  }
}
