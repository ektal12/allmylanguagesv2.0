// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Injectable()
export class DataStoreProvider {

  assimilFrench
  // test
  constructor(
    private storage: Storage,
    private platform: Platform,
    private events: Events
  ) {

  }

getMyTexts() {
  return this.platform.ready().then(()=> {
    return this.storage.get('myTexts')
    .then((res)=> {
      return res
    })
  })
}

  saveNewText(lesson) {
    //PROTEXT THIS WITH PLATFORM///
    // this.storage.get('myTexts')
    this.getMyTexts()
    .then(myTexts=> {
      if(!myTexts) {
        myTexts = []
      }
      myTexts.push(lesson)
      console.log(myTexts)
      this.storage.set('myTexts', myTexts)
      .then(res=> {console.log(res)
        this.events.publish('textsChanged')
      })
    }).catch(err=> console.log(err))
  }
  
  updateAText(lesson) {
  
    let newTexts = []
      this.getMyTexts()
      .then(myTexts => {
        myTexts.forEach(item => {
          if (item.id == lesson.id) {
            
            newTexts.push(lesson)

          } else {
           
            newTexts.push(item)
          }
        })
       
        this.storage.set('myTexts', newTexts)
        .then(()=> {
          this.events.publish('textsChanged')
        })
      })
  }

deleteAText(text) {
  this.getMyTexts()
      .then(myTexts => {
        myTexts.forEach(item => {
          if (item.id == text.id) {
            console.log(item)
            let index = myTexts.indexOf(item)
            console.log(index)
            myTexts.splice(index, 1)
            
          }
        })
       
        this.storage.set('myTexts', myTexts)
        .then(()=> {
          this.events.publish('textsChanged')
        })
      })
    }

}
