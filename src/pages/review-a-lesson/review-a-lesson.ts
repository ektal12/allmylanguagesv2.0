import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavParams, Content, NavController } from 'ionic-angular';
import { DataStoreProvider } from '../../providers/data-store/data-store';
import { HomePage } from '../home/home';



@IonicPage()
@Component({
  selector: 'page-review-a-lesson',
  templateUrl: 'review-a-lesson.html',
})
export class ReviewALessonPage {
  lesson
  lessonSentences = []
  // lessonIndex
  reviewing = false
  

  @ViewChild(Content) content: Content;
  
    constructor( public navParams: NavParams,
      private dataStore: DataStoreProvider,
      private navCtrl: NavController
      ) {
      
      if(this.navParams.get('lesson')) {
        let myLesson = this.navParams.get('lesson')
    
        if(!myLesson.practiceArray) {
          myLesson.practiceArray = this.createPracticeArray(myLesson.sentenceArray.length)
          myLesson.currentItem = 0
        }
        this.lesson = myLesson
       
        // WATCHIT
        this.lessonSentences =  this.lesson.sentenceArray  
  
      } else {
        this.navCtrl.setRoot(HomePage)
      }
  
    
        // this.lessonIndex = this.navParams.get('index')
 
    
    }
  
    ionViewWillLeave() {

      //WATCHIT
      if(this.lesson) {
        this.dataStore.updateAText(this.lesson)
        
      }
    }
  
    wordSelected(i, word) {
      if (word.type == 'word') {
       
        switch (word.class) {
          case 'blank':
            word.class = 'normal';
            break;
          case 'red':
            word.class = 'normal';
            break;
          case 'normal':
            word.class = 'red';
            // WATCHIT
         this.dataStore.updateAText(this.lesson)
           
            break;
          case '':
            word.class = 'red';
           // WATCHIT
            this.dataStore.updateAText(this.lesson)
        
           
            break;
          default:
            word.class = 'normal';
        }
        word.selected = true
  
      }
    }
  
   
  
    review(sentence, mode) {
  
    
      sentence.reviewing = !sentence.reviewing
      let myClass = 'normal'
      if (sentence.reviewing) {
        if (mode == 'blank') {
          myClass = 'blank'
        }
        if (mode == 'fade') {
          myClass = 'fade'
        }
  
      }
      sentence.sentenceArray.forEach(item => {
        if (item.type == "word" && item.class != 'red') {
          item.class = myClass
        }
      })

     
      
    }
  
    reviewSingle(sentence, mode) {
     
      if (!sentence.reviewingSingle) {
        sentence.reviewingSingle = false
      }
     
      sentence.reviewingSingle = !sentence.reviewingSingle
      let myClass = 'normal'
      if (sentence.reviewingSingle) {
        if (mode == 'blank') {
          myClass = 'blank'
        }
        if (mode == 'fade') {
          myClass = 'fade'
        }
  
      }
      sentence.sentenceArray.forEach(item => {
        if (item.type == "word" && item.class != 'red') {
          item.class = myClass
        }
      })
    }
  
    createPracticeArray(length) {
      let practiceArray = []
      for (var i = 0; i < length; i++) {
        practiceArray.push(i)
        this.shuffle(practiceArray)
      }
      return practiceArray
    }
  
  
    reviewAll(mode) {
      
     
      let index = this.lesson.practiceArray[this.lesson.currentItem]
       // WATCHIT
      let sentence = this.lessonSentences[index]
     
      this.review(sentence, mode)
  
     
       var i = 0
        this.lesson.sentenceArray.forEach(sentence=> {
          if(i != index){  
            sentence.sentenceArray.forEach(item=> {
              if(item.class == 'blank' || item.class == 'fade' || item.class == 'green') {
                item.class = ''
              }
            })
          }
          i++
        })
       
      
      if(!sentence.reviewing) {
        //ie we are revealing the sentence
        sentence.marked = ''
        if(this.lesson.currentItem < this.lesson.practiceArray.length-1) {
          this.lesson.currentItem ++
   
          this.dataStore.updateAText(this.lesson)
        } else {
          this.lesson.currentItem = 0

      
          this.lesson.sentenceArray.forEach(sentence => {
            sentence.practised = false
         
          })
          //shuffle them up again
          this.lesson.practiceArray = this.createPracticeArray(this.lesson.sentenceArray.length)
      

      
          this.dataStore.updateAText(this.lesson)
        
         
        }
        sentence.sentenceArray.forEach(item => {
          if(item.class != 'red') {
            item.class='green'
          }
          
        })
  
        
      } else {
      // ie we are reviewing the sentence
        
        sentence.marked = 'marked'
  
        let scrollPosition = index
        if(index > 2) {
           scrollPosition = index -2
        } 
        
        this.scrollTo(scrollPosition)
        sentence.practised = true
      }
  
     
     
     
     
    }
  
    shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
      }
      return a;
  }
  
  scrollTo(elementId: string) {
  
    let y = document.getElementById(elementId).offsetTop;
    this.content.scrollTo(0, y);
  }

}
