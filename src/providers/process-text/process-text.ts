
import { Injectable } from '@angular/core';
import { Lesson } from '../../models/lesson';
import { SentenceElement } from '../../models/word';


@Injectable()
export class ProcessTextProvider {

  constructor() {
    
  }

  processText(lesson: Lesson) {
  
    let sentences = []
    //split up into individual lines
    let splitUpLines = new RegExp(/$/m)
    let linesOfText = lesson.lessonText.split(splitUpLines)
    //get rid of any empty lines and trim off white space
    let blankLine = new RegExp(/\w+/)
    let cleanedUpTextArray = []
    linesOfText.forEach(item => {
      if (blankLine.test(item)) {
        cleanedUpTextArray.push(item.trim())
      }
    })
    cleanedUpTextArray.forEach(item => {
      let mySentenceArray = this.processSentence(item)

      let mySentence = {
        sentenceText: item,
        sentenceArray: mySentenceArray
      }
      sentences.push(mySentence)
    })
    lesson.sentenceArray = sentences
   return lesson
  }

  processSentence(sentence) {
    let whiteSpace = new RegExp(/[\s]+/)
    let sentenceElements = sentence.split(whiteSpace)
   let sentenceArray = []
    sentenceElements.forEach((element)=> {
      let myArray = this.splitOffPunctuation(element)
      sentenceArray =  sentenceArray.concat(myArray)
    })
    return sentenceArray
  }

  splitOffPunctuation(element) {
    let punctuation = new RegExp(/[.,\/#!?$%\^&\*;:{}=\-_`~()…¿¡<>]/)
    let punctuationBeforeCount = 0
    let myString = element
    while (punctuation.test(myString.substr(0, 1))) {
      myString = myString.substr(1)
      punctuationBeforeCount++
    }

    let punctuationAfterCount = 0
    while (punctuation.test(myString.substr(myString.length - 1))) {
      myString = myString.substr(0, myString.length - 1)
      punctuationAfterCount++
    }

    let output = []
    if (punctuationBeforeCount != 0) {
      let startPunctuationObj = {
        text: element.substr(0, punctuationBeforeCount),
        type: 'punctuation', 
        class: ""
      } as SentenceElement
      output.push(startPunctuationObj)
    }
    let word = {
      text: myString,
      type: 'word', 
      class: ""
    } as SentenceElement
    output.push(word)
    if (punctuationAfterCount != 0) {
    let endPunctuationObj = {
      text: element.substr(element.length - punctuationAfterCount),
      type: 'punctuation', 
      class: ""
    } as SentenceElement
    output.push(endPunctuationObj)
  }

    return output
  }

}
