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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private processTextProvider: ProcessTextProvider,
    private dataStore: DataStoreProvider,

        ) {

    //   this.myLesson.shortDescription = "A first dummy test"

    // this.myLesson.lessonText = `J’aime un podcast de France inter.
    // Le présentateur s’appelle Jean Lebrun.
    // Les sujets sont très variés.

    // Des enregistrements historiques.
      
    // Des hommes politiques et des scientifiques.
       
    // Elle m’a demandé de l’emmener à Paris.
    // Des écrivains et des auteurs.

    // Cette ??voiture est très… !belle!? oui, je l’ai achetée.

    // Je veux ton_avis sur le cours.

    // 99999 having/ funny => dreams 90...    

    // Unsere Hörtexte werden von Journalisten und Experten für Deutsch als Fremdsprache konzipiert und von Muttersprachlern gelesen. 
    // So sind die Inhalte authentisch und gleichzeitig für Deutschlerner gut verständlich. 
    
    // ¿Maroon 5 en el Super Bowl de 2019? Para muchos, esa¡ no es una buena idea
    // `
  }
  
  ionViewDidLoad() {
  //  this.processText(this.myLesson)
  }

  updateText(text) {
    console.log(this.myLesson)
  }

  // processText(lesson: Lesson) {
  //  let processedLesson =  this.processTextProvider.processText(lesson)
  //  console.log(processedLesson)
  // }

  saveNewText() {
    let processedLesson =  this.processTextProvider.processText(this.myLesson)
    console.log(processedLesson)
    this.dataStore.saveNewText(processedLesson)
    
    this.navCtrl.pop()
  }
}
