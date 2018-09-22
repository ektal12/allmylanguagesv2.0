import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Lesson } from '../../models/lesson';
import { ProcessTextProvider } from '../../providers/process-text/process-text';



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
    text: ""
  } as Lesson

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private processTextProvider: ProcessTextProvider
    ) {

    this.myLesson.text = `J’aime un podcast de France inter.
    Le présentateur s’appelle Jean Lebrun.
    Les sujets sont très variés.
    
    Des enregistrements historiques.
    Des hommes politiques et des scientifiques.
    Des écrivains et des auteurs.
    `
  }

  ionViewDidLoad() {
   this.processText(this.myLesson.text)
  }

  updateText(text) {

  }

  processText(text) {
    this.processTextProvider.processText(text)
  }

  saveLesson() {

  }
}
