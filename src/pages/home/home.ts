import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { DataStoreProvider } from '../../providers/data-store/data-store';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

mySavedTexts = []

  //old code below
  lessons = [{ directoryName: "", fileName: "", path: "" }]
  assimilFrench = []



  constructor(public navCtrl: NavController, 
    // private storage: Storage, 
    // private platform: Platform,
    private dataStore: DataStoreProvider,
    private events: Events
    ) {


      this.events.subscribe('textsChanged', ()=> {
        this.dataStore.getMyTexts().then((res) => {
          this.mySavedTexts = res
        }).catch(err => console.log(err))
      })


    this.dataStore.getMyTexts().then((res) => {
      this.mySavedTexts = res
    }).catch(err => console.log(err))
  }
  
ionViewDidLoad() {
  
}

reviewLesson(lesson) {
  
  this.navCtrl.push('ReviewALessonPage', {lesson: lesson} )
}

deleteText(text) {
  this.dataStore.deleteAText(text)
}

addAText() {
  this.navCtrl.push('AddATextPage' )
}

}
