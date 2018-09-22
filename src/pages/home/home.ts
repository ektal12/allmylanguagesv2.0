import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataStoreProvider } from '../../providers/data-store/data-store';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lessons = [{ directoryName: "", fileName: "", path: "" }]
  assimilFrench = []

  constructor(public navCtrl: NavController, 
    // private storage: Storage, 
    // private platform: Platform,
    private dataStore: DataStoreProvider
    ) {

      this.dataStore.getCourse().then((res)=> {
        this.assimilFrench = res
      
       }).catch(err=>console.log(err))

  }
  
ionViewDidLoad() {
  
}

reviewLesson(lesson, i) {
  
  this.navCtrl.push('ReviewALessonPage', {lesson: lesson, index: i} )
}

addAText() {
  this.navCtrl.push('AddATextPage' )
}

}
