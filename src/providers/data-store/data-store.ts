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

  getCourse() {


    return this.platform.ready().then(() => {

      return this.storage.get('course').then((res) => {
        if (res) {
          //NB this is a hack to reset the data ... eg when you add a new course
       
          // let initialData = [{"album":"ASSIMIL Japanese - L001","sentences":[{"title":"第一課","path":"/assets/audio/L001-Japanese ASSIMIL/N1.mp3","id":"sentence0","sentenceArray":[{"text":"第一課","type":"word","class":""}]},{"title":"早く。","path":"/assets/audio/L001-Japanese ASSIMIL/S01.mp3","id":"sentence1","sentenceArray":[{"text":"早く","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"行きましょう。","path":"/assets/audio/L001-Japanese ASSIMIL/S02.mp3","id":"sentence2","sentenceArray":[{"text":"行きましょう","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"わかりました。","path":"/assets/audio/L001-Japanese ASSIMIL/S03.mp3","id":"sentence3","sentenceArray":[{"text":"わかりました","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"どこ へ。","path":"/assets/audio/L001-Japanese ASSIMIL/S04.mp3","id":"sentence4","sentenceArray":[{"text":"どこ","type":"word","class":""},{"text":"へ","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"あそこ へ。","path":"/assets/audio/L001-Japanese ASSIMIL/S05.mp3","id":"sentence5","sentenceArray":[{"text":"あそこ","type":"word","class":""},{"text":"へ","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"暑い です ね。","path":"/assets/audio/L001-Japanese ASSIMIL/S06.mp3","id":"sentence6","sentenceArray":[{"text":"暑い","type":"word","class":""},{"text":"です","type":"word","class":""},{"text":"ね","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"そう です ね。","path":"/assets/audio/L001-Japanese ASSIMIL/S07.mp3","id":"sentence7","sentenceArray":[{"text":"そう","type":"word","class":""},{"text":"です","type":"word","class":""},{"text":"ね","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"早く。","path":"/assets/audio/L001-Japanese ASSIMIL/T01.mp3","id":"sentence8","sentenceArray":[{"text":"早く","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"行きましょう。","path":"/assets/audio/L001-Japanese ASSIMIL/T02.mp3","id":"sentence9","sentenceArray":[{"text":"行きましょう","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"早く 行きましょう。","path":"/assets/audio/L001-Japanese ASSIMIL/T03.mp3","id":"sentence10","sentenceArray":[{"text":"早く","type":"word","class":""},{"text":"行きましょう","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"わかりました。","path":"/assets/audio/L001-Japanese ASSIMIL/T04.mp3","id":"sentence11","sentenceArray":[{"text":"わかりました","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]}]},{"album":"ASSIMIL Japanese - L002","sentences":[{"title":"第二課","path":"/assets/audio/L002-Japanese ASSIMIL/N2.mp3","id":"sentence0","sentenceArray":[{"text":"第二課","type":"word","class":""}]},{"title":"ピカソ 展","path":"/assets/audio/L002-Japanese ASSIMIL/S00-TITLE.mp3","id":"sentence1","sentenceArray":[{"text":"ピカソ","type":"word","class":""},{"text":"展","type":"word","class":""}]},{"title":"見ました か。","path":"/assets/audio/L002-Japanese ASSIMIL/S01.mp3","id":"sentence2","sentenceArray":[{"text":"見ました","type":"word","class":""},{"text":"か","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"何 を。","path":"/assets/audio/L002-Japanese ASSIMIL/S02.mp3","id":"sentence3","sentenceArray":[{"text":"何","type":"word","class":""},{"text":"を","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"ピカソ 展。","path":"/assets/audio/L002-Japanese ASSIMIL/S03.mp3","id":"sentence4","sentenceArray":[{"text":"ピカソ","type":"word","class":""},{"text":"展","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"まだ です。","path":"/assets/audio/L002-Japanese ASSIMIL/S04.mp3","id":"sentence5","sentenceArray":[{"text":"まだ","type":"word","class":""},{"text":"です","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"いい です よ。","path":"/assets/audio/L002-Japanese ASSIMIL/S05.mp3","id":"sentence6","sentenceArray":[{"text":"いい","type":"word","class":""},{"text":"です","type":"word","class":""},{"text":"よ","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"そう です か。","path":"/assets/audio/L002-Japanese ASSIMIL/S06.mp3","id":"sentence7","sentenceArray":[{"text":"そう","type":"word","class":""},{"text":"です","type":"word","class":""},{"text":"か","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"あした 行きます。","path":"/assets/audio/L002-Japanese ASSIMIL/S07.mp3","id":"sentence8","sentenceArray":[{"text":"あした","type":"word","class":""},{"text":"行きます","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"見ました か。","path":"/assets/audio/L002-Japanese ASSIMIL/T01.mp3","id":"sentence9","sentenceArray":[{"text":"見ました","type":"word","class":""},{"text":"か","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"まだ 見ません。","path":"/assets/audio/L002-Japanese ASSIMIL/T02.mp3","id":"sentence10","sentenceArray":[{"text":"まだ","type":"word","class":""},{"text":"見ません","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"見ました か。","path":"/assets/audio/L002-Japanese ASSIMIL/T03.mp3","id":"sentence11","sentenceArray":[{"text":"見ました","type":"word","class":""},{"text":"か","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"見ました。","path":"/assets/audio/L002-Japanese ASSIMIL/T04.mp3","id":"sentence12","sentenceArray":[{"text":"見ました","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"そう です か。","path":"/assets/audio/L002-Japanese ASSIMIL/T05.mp3","id":"sentence13","sentenceArray":[{"text":"そう","type":"word","class":""},{"text":"です","type":"word","class":""},{"text":"か","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]}]},{"album":"ASSIMIL Japanese - L003","sentences":[{"title":"第三課","path":"/assets/audio/L003-Japanese ASSIMIL/N3.mp3","id":"sentence0","sentenceArray":[{"text":"第三課","type":"word","class":""}]},{"title":"朝食","path":"/assets/audio/L003-Japanese ASSIMIL/S00-TITLE.mp3","id":"sentence1","sentenceArray":[{"text":"朝食","type":"word","class":""}]},{"title":"おはよう ございます。","path":"/assets/audio/L003-Japanese ASSIMIL/S01.mp3","id":"sentence2","sentenceArray":[{"text":"おはよう","type":"word","class":""},{"text":"ございます","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"おはよう ございます。","path":"/assets/audio/L003-Japanese ASSIMIL/S02.mp3","id":"sentence3","sentenceArray":[{"text":"おはよう","type":"word","class":""},{"text":"ございます","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"パン を 食べます か。","path":"/assets/audio/L003-Japanese ASSIMIL/S03.mp3","id":"sentence4","sentenceArray":[{"text":"パン","type":"word","class":""},{"text":"を","type":"word","class":""},{"text":"食べます","type":"word","class":""},{"text":"か","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"食べます。","path":"/assets/audio/L003-Japanese ASSIMIL/S04.mp3","id":"sentence5","sentenceArray":[{"text":"食べます","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"コーヒー を 飲みます か。","path":"/assets/audio/L003-Japanese ASSIMIL/S05.mp3","id":"sentence6","sentenceArray":[{"text":"コーヒー","type":"word","class":""},{"text":"を","type":"word","class":""},{"text":"飲みます","type":"word","class":""},{"text":"か","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"飲みます。","path":"/assets/audio/L003-Japanese ASSIMIL/S06.mp3","id":"sentence7","sentenceArray":[{"text":"飲みます","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"ビール を 飲みます か。","path":"/assets/audio/L003-Japanese ASSIMIL/S07.mp3","id":"sentence8","sentenceArray":[{"text":"ビール","type":"word","class":""},{"text":"を","type":"word","class":""},{"text":"飲みます","type":"word","class":""},{"text":"か","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"飲みません。","path":"/assets/audio/L003-Japanese ASSIMIL/S08.mp3","id":"sentence9","sentenceArray":[{"text":"飲みません","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"りんご を 食ベます か。","path":"/assets/audio/L003-Japanese ASSIMIL/S09.mp3","id":"sentence10","sentenceArray":[{"text":"りんご","type":"word","class":""},{"text":"を","type":"word","class":""},{"text":"食ベます","type":"word","class":""},{"text":"か","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"食ベません。","path":"/assets/audio/L003-Japanese ASSIMIL/S10.mp3","id":"sentence11","sentenceArray":[{"text":"食ベません","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"それでは 卵 を 食べます か。","path":"/assets/audio/L003-Japanese ASSIMIL/S11.mp3","id":"sentence12","sentenceArray":[{"text":"それでは","type":"word","class":""},{"text":"卵","type":"word","class":""},{"text":"を","type":"word","class":""},{"text":"食べます","type":"word","class":""},{"text":"か","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"食ベます。","path":"/assets/audio/L003-Japanese ASSIMIL/S12.mp3","id":"sentence13","sentenceArray":[{"text":"食ベます","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"コーヒー を 飲みます か。","path":"/assets/audio/L003-Japanese ASSIMIL/T01.mp3","id":"sentence14","sentenceArray":[{"text":"コーヒー","type":"word","class":""},{"text":"を","type":"word","class":""},{"text":"飲みます","type":"word","class":""},{"text":"か","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"飲みます。","path":"/assets/audio/L003-Japanese ASSIMIL/T02.mp3","id":"sentence15","sentenceArray":[{"text":"飲みます","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"コーヒー を 飲みます。","path":"/assets/audio/L003-Japanese ASSIMIL/T03.mp3","id":"sentence16","sentenceArray":[{"text":"コーヒー","type":"word","class":""},{"text":"を","type":"word","class":""},{"text":"飲みます","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"ビール を 飲みます か。","path":"/assets/audio/L003-Japanese ASSIMIL/T04.mp3","id":"sentence17","sentenceArray":[{"text":"ビール","type":"word","class":""},{"text":"を","type":"word","class":""},{"text":"飲みます","type":"word","class":""},{"text":"か","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"飲みません。","path":"/assets/audio/L003-Japanese ASSIMIL/T05.mp3","id":"sentence18","sentenceArray":[{"text":"飲みません","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]}]}]
          
         
        
          // this.storage.set('course', initialData)
 //end of hack
          return this.storage.get('course').then((res) => {
            return res
          })
        } else {

          
            // ??the next line is also a hack to use test data
            // .get('assets/json/test.json')
            let initialData = [{"album":"ASSIMIL Japanese - L001","sentences":[{"title":"第一課","path":"/assets/audio/L001-Japanese ASSIMIL/N1.mp3","id":"sentence0","sentenceArray":[{"text":"第一課","type":"word","class":""}]},{"title":"早く。","path":"/assets/audio/L001-Japanese ASSIMIL/S01.mp3","id":"sentence1","sentenceArray":[{"text":"早く","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"行きましょう。","path":"/assets/audio/L001-Japanese ASSIMIL/S02.mp3","id":"sentence2","sentenceArray":[{"text":"行きましょう","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"わかりました。","path":"/assets/audio/L001-Japanese ASSIMIL/S03.mp3","id":"sentence3","sentenceArray":[{"text":"わかりました","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"どこ へ。","path":"/assets/audio/L001-Japanese ASSIMIL/S04.mp3","id":"sentence4","sentenceArray":[{"text":"どこ","type":"word","class":""},{"text":"へ","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"あそこ へ。","path":"/assets/audio/L001-Japanese ASSIMIL/S05.mp3","id":"sentence5","sentenceArray":[{"text":"あそこ","type":"word","class":""},{"text":"へ","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"暑い です ね。","path":"/assets/audio/L001-Japanese ASSIMIL/S06.mp3","id":"sentence6","sentenceArray":[{"text":"暑い","type":"word","class":""},{"text":"です","type":"word","class":""},{"text":"ね","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"そう です ね。","path":"/assets/audio/L001-Japanese ASSIMIL/S07.mp3","id":"sentence7","sentenceArray":[{"text":"そう","type":"word","class":""},{"text":"です","type":"word","class":""},{"text":"ね","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"早く。","path":"/assets/audio/L001-Japanese ASSIMIL/T01.mp3","id":"sentence8","sentenceArray":[{"text":"早く","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"行きましょう。","path":"/assets/audio/L001-Japanese ASSIMIL/T02.mp3","id":"sentence9","sentenceArray":[{"text":"行きましょう","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"早く 行きましょう。","path":"/assets/audio/L001-Japanese ASSIMIL/T03.mp3","id":"sentence10","sentenceArray":[{"text":"早く","type":"word","class":""},{"text":"行きましょう","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"わかりました。","path":"/assets/audio/L001-Japanese ASSIMIL/T04.mp3","id":"sentence11","sentenceArray":[{"text":"わかりました","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]}]},{"album":"ASSIMIL Japanese - L002","sentences":[{"title":"第二課","path":"/assets/audio/L002-Japanese ASSIMIL/N2.mp3","id":"sentence0","sentenceArray":[{"text":"第二課","type":"word","class":""}]},{"title":"ピカソ 展","path":"/assets/audio/L002-Japanese ASSIMIL/S00-TITLE.mp3","id":"sentence1","sentenceArray":[{"text":"ピカソ","type":"word","class":""},{"text":"展","type":"word","class":""}]},{"title":"見ました か。","path":"/assets/audio/L002-Japanese ASSIMIL/S01.mp3","id":"sentence2","sentenceArray":[{"text":"見ました","type":"word","class":""},{"text":"か","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"何 を。","path":"/assets/audio/L002-Japanese ASSIMIL/S02.mp3","id":"sentence3","sentenceArray":[{"text":"何","type":"word","class":""},{"text":"を","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"ピカソ 展。","path":"/assets/audio/L002-Japanese ASSIMIL/S03.mp3","id":"sentence4","sentenceArray":[{"text":"ピカソ","type":"word","class":""},{"text":"展","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"まだ です。","path":"/assets/audio/L002-Japanese ASSIMIL/S04.mp3","id":"sentence5","sentenceArray":[{"text":"まだ","type":"word","class":""},{"text":"です","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"いい です よ。","path":"/assets/audio/L002-Japanese ASSIMIL/S05.mp3","id":"sentence6","sentenceArray":[{"text":"いい","type":"word","class":""},{"text":"です","type":"word","class":""},{"text":"よ","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"そう です か。","path":"/assets/audio/L002-Japanese ASSIMIL/S06.mp3","id":"sentence7","sentenceArray":[{"text":"そう","type":"word","class":""},{"text":"です","type":"word","class":""},{"text":"か","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"あした 行きます。","path":"/assets/audio/L002-Japanese ASSIMIL/S07.mp3","id":"sentence8","sentenceArray":[{"text":"あした","type":"word","class":""},{"text":"行きます","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"見ました か。","path":"/assets/audio/L002-Japanese ASSIMIL/T01.mp3","id":"sentence9","sentenceArray":[{"text":"見ました","type":"word","class":""},{"text":"か","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"まだ 見ません。","path":"/assets/audio/L002-Japanese ASSIMIL/T02.mp3","id":"sentence10","sentenceArray":[{"text":"まだ","type":"word","class":""},{"text":"見ません","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"見ました か。","path":"/assets/audio/L002-Japanese ASSIMIL/T03.mp3","id":"sentence11","sentenceArray":[{"text":"見ました","type":"word","class":""},{"text":"か","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"見ました。","path":"/assets/audio/L002-Japanese ASSIMIL/T04.mp3","id":"sentence12","sentenceArray":[{"text":"見ました","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"そう です か。","path":"/assets/audio/L002-Japanese ASSIMIL/T05.mp3","id":"sentence13","sentenceArray":[{"text":"そう","type":"word","class":""},{"text":"です","type":"word","class":""},{"text":"か","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]}]},{"album":"ASSIMIL Japanese - L003","sentences":[{"title":"第三課","path":"/assets/audio/L003-Japanese ASSIMIL/N3.mp3","id":"sentence0","sentenceArray":[{"text":"第三課","type":"word","class":""}]},{"title":"朝食","path":"/assets/audio/L003-Japanese ASSIMIL/S00-TITLE.mp3","id":"sentence1","sentenceArray":[{"text":"朝食","type":"word","class":""}]},{"title":"おはよう ございます。","path":"/assets/audio/L003-Japanese ASSIMIL/S01.mp3","id":"sentence2","sentenceArray":[{"text":"おはよう","type":"word","class":""},{"text":"ございます","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"おはよう ございます。","path":"/assets/audio/L003-Japanese ASSIMIL/S02.mp3","id":"sentence3","sentenceArray":[{"text":"おはよう","type":"word","class":""},{"text":"ございます","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"パン を 食べます か。","path":"/assets/audio/L003-Japanese ASSIMIL/S03.mp3","id":"sentence4","sentenceArray":[{"text":"パン","type":"word","class":""},{"text":"を","type":"word","class":""},{"text":"食べます","type":"word","class":""},{"text":"か","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"食べます。","path":"/assets/audio/L003-Japanese ASSIMIL/S04.mp3","id":"sentence5","sentenceArray":[{"text":"食べます","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"コーヒー を 飲みます か。","path":"/assets/audio/L003-Japanese ASSIMIL/S05.mp3","id":"sentence6","sentenceArray":[{"text":"コーヒー","type":"word","class":""},{"text":"を","type":"word","class":""},{"text":"飲みます","type":"word","class":""},{"text":"か","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"飲みます。","path":"/assets/audio/L003-Japanese ASSIMIL/S06.mp3","id":"sentence7","sentenceArray":[{"text":"飲みます","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"ビール を 飲みます か。","path":"/assets/audio/L003-Japanese ASSIMIL/S07.mp3","id":"sentence8","sentenceArray":[{"text":"ビール","type":"word","class":""},{"text":"を","type":"word","class":""},{"text":"飲みます","type":"word","class":""},{"text":"か","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"飲みません。","path":"/assets/audio/L003-Japanese ASSIMIL/S08.mp3","id":"sentence9","sentenceArray":[{"text":"飲みません","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"りんご を 食ベます か。","path":"/assets/audio/L003-Japanese ASSIMIL/S09.mp3","id":"sentence10","sentenceArray":[{"text":"りんご","type":"word","class":""},{"text":"を","type":"word","class":""},{"text":"食ベます","type":"word","class":""},{"text":"か","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"食ベません。","path":"/assets/audio/L003-Japanese ASSIMIL/S10.mp3","id":"sentence11","sentenceArray":[{"text":"食ベません","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"それでは 卵 を 食べます か。","path":"/assets/audio/L003-Japanese ASSIMIL/S11.mp3","id":"sentence12","sentenceArray":[{"text":"それでは","type":"word","class":""},{"text":"卵","type":"word","class":""},{"text":"を","type":"word","class":""},{"text":"食べます","type":"word","class":""},{"text":"か","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"食ベます。","path":"/assets/audio/L003-Japanese ASSIMIL/S12.mp3","id":"sentence13","sentenceArray":[{"text":"食ベます","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"コーヒー を 飲みます か。","path":"/assets/audio/L003-Japanese ASSIMIL/T01.mp3","id":"sentence14","sentenceArray":[{"text":"コーヒー","type":"word","class":""},{"text":"を","type":"word","class":""},{"text":"飲みます","type":"word","class":""},{"text":"か","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"飲みます。","path":"/assets/audio/L003-Japanese ASSIMIL/T02.mp3","id":"sentence15","sentenceArray":[{"text":"飲みます","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"コーヒー を 飲みます。","path":"/assets/audio/L003-Japanese ASSIMIL/T03.mp3","id":"sentence16","sentenceArray":[{"text":"コーヒー","type":"word","class":""},{"text":"を","type":"word","class":""},{"text":"飲みます","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"ビール を 飲みます か。","path":"/assets/audio/L003-Japanese ASSIMIL/T04.mp3","id":"sentence17","sentenceArray":[{"text":"ビール","type":"word","class":""},{"text":"を","type":"word","class":""},{"text":"飲みます","type":"word","class":""},{"text":"か","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]},{"title":"飲みません。","path":"/assets/audio/L003-Japanese ASSIMIL/T05.mp3","id":"sentence18","sentenceArray":[{"text":"飲みません","type":"word","class":""},{"text":"。","type":"punctuation","class":""}]}]}]
         

            this.storage.set('course', initialData)
              // this.prepareTheCourse().then(result => {
              //   this.storage.set('course', result)
              // })
            


        }
      })
    })
  }

//   prepareTheCourse(): Promise<any> {
//     let output = []

// let initialData = [{"album":"ASSIMIL Japanese - L004","sentences":[{"title":"第四課","path":"/assets/audio/L004-Japanese ASSIMIL/N4.mp3"},{"title":"税関","path":"/assets/audio/L004-Japanese ASSIMIL/S00-TITLE.mp3"},{"title":"カメラ を、 持って います か。カメラ 『を 持って？ います か。","path":"/assets/audio/L004-Japanese ASSIMIL/S01.mp3"},{"title":"はい、「持って」 います。はい、持って〜 います・います。","path":"/assets/audio/L004-Japanese ASSIMIL/S02.mp3"},{"title":"どこ に あります か","path":"/assets/audio/L004-Japanese ASSIMIL/S03.mp3"},{"title":"トランク の 中 に あります。","path":"/assets/audio/L004-Japanese ASSIMIL/S04.mp3"},{"title":"トランク の 中 に 何 が あります か。","path":"/assets/audio/L004-Japanese ASSIMIL/S05.mp3"},{"title":"服 と 本 が あります。","path":"/assets/audio/L004-Japanese ASSIMIL/S06.mp3"},{"title":"それ だけ です か。","path":"/assets/audio/L004-Japanese ASSIMIL/S07.mp3"},{"title":"はい、そう です。","path":"/assets/audio/L004-Japanese ASSIMIL/S08.mp3"},{"title":"お 酒?","path":"/assets/audio/L004-Japanese ASSIMIL/S09.mp3"},{"title":"ありません。","path":"/assets/audio/L004-Japanese ASSIMIL/S10.mp3"},{"title":"はい、けっこう です。","path":"/assets/audio/L004-Japanese ASSIMIL/S11.mp3"},{"title":"服 を 持って います か。","path":"/assets/audio/L004-Japanese ASSIMIL/T01.mp3"},{"title":"はい、持って います。","path":"/assets/audio/L004-Japanese ASSIMIL/T02.mp3"},{"title":"どこ に あります か。","path":"/assets/audio/L004-Japanese ASSIMIL/T03.mp3"},{"title":"あそこ に あります。","path":"/assets/audio/L004-Japanese ASSIMIL/T04.mp3"}]},{"album":"ASSIMIL Japanese - L005","sentences":[{"title":"第五課","path":"/assets/audio/L005-Japanese ASSIMIL/N5.mp3"},{"title":"買物","path":"/assets/audio/L005-Japanese ASSIMIL/S00-TITLE.mp3"},{"title":"どこ へ 行きます か。","path":"/assets/audio/L005-Japanese ASSIMIL/S01.mp3"},{"title":"デパート へ 行きます。","path":"/assets/audio/L005-Japanese ASSIMIL/S02.mp3"},{"title":"一緒 に 行きます。","path":"/assets/audio/L005-Japanese ASSIMIL/S03.mp3"},{"title":"何 を 買います か。","path":"/assets/audio/L005-Japanese ASSIMIL/S04.mp3"},{"title":"靴下 を 買います。","path":"/assets/audio/L005-Japanese ASSIMIL/S05.mp3"},{"title":"着きました。","path":"/assets/audio/L005-Japanese ASSIMIL/S06.mp3"},{"title":"入りましょう。","path":"/assets/audio/L005-Japanese ASSIMIL/S07.mp3"},{"title":"ここ に 靴下 が あります。","path":"/assets/audio/L005-Japanese ASSIMIL/S08.mp3"},{"title":"でも 高い です ね。","path":"/assets/audio/L005-Japanese ASSIMIL/S09.mp3"},{"title":"そう です ね。","path":"/assets/audio/L005-Japanese ASSIMIL/S10.mp3"},{"title":"やめます。","path":"/assets/audio/L005-Japanese ASSIMIL/S11.mp3"},{"title":"あそこ に 靴下 が あります。","path":"/assets/audio/L005-Japanese ASSIMIL/T01.mp3"},{"title":"ここ に トランク が あります。","path":"/assets/audio/L005-Japanese ASSIMIL/T02.mp3"},{"title":"どこ へ  行きます か。","path":"/assets/audio/L005-Japanese ASSIMIL/T03.mp3"},{"title":"服 を 買います。","path":"/assets/audio/L005-Japanese ASSIMIL/T04.mp3"},{"title":"どこ に あります か。","path":"/assets/audio/L005-Japanese ASSIMIL/T05.mp3"}]}]


//        initialData.forEach((lesson) => {
//       //create a Lesson object
//       let myLesson = {
//         album: lesson.album,
//         sentences: [],
//       }
//       // analyse the sentence
//       let i = 0
//       lesson.sentences.forEach(sentence => {

//         let sentenceArray = this.splitUpSentence(sentence.title)
//         let mySentence = {
//           id: "sentence" + i,
//           title: sentence.title,
//           path: sentence.path,
//           sentenceArray: sentenceArray
//         }

//         myLesson.sentences.push(mySentence)

//         i++
//       })
//       //put the lesson Object into the output
//       output.push(myLesson)



//     })
//     return new Promise((resolve, reject) => resolve(output));
//   }

  testPromise(): Promise<any> {
    var PROPERTIES = 8
    return new Promise((resolve, reject) => resolve(PROPERTIES));
  }

  // splitUpSentence(sentence) {
  //   let output = []
  //   // let splitUpWords = new RegExp(/[\s\t。、「」『』〜・？！ （）【】｛｝…]/)

  //   let splitUpWords = new RegExp(/(?=[。、「」『』〜・？！（）【】｛｝…\s\t])/)


  //   let step1 = sentence.split(splitUpWords)


  //   // let punctuation = new RegExp(/[!@#$%^&*()=_+|;:",.<>?。、「」『』〜・？！ （）【】｛｝…]/)
  //   let punctuation = new RegExp(/[。、「」『』〜・？！ （）【】｛｝…]/)
  //   // let removePunctuation = new RegExp(/(?=[!@#$%^&*()=_+|;:",.<>?。、「」『』〜・？！ （）【】｛｝…])/)
  //   let removePunctuation = new RegExp(/(?<=[。、「」『』〜・？！（）【】｛｝…\s\t])/)



  //   // 。、「」『』〜・？！ （）【】｛｝…

  //   step1.forEach(item => {
  //     let myPiece = item.trim().split(removePunctuation)
  //     if (myPiece[0] != "") {
  //       // let myPiece = item.split(removePunctuation)
  //       let type = 'word'
  //       if (myPiece.length == 1) {
  //         //in case its the last word in a sentence we need to check if that is a punctuation mark
  //         if (punctuation.test(myPiece[0])) {
  //           type = 'punctuation'
  //         }

  //         let wordObj = {

  //           text: myPiece[0],
  //           type: type,
  //           class: ""
  //         }
  //         output.push(wordObj)
  //       }
  //       if (myPiece.length > 1) {

  //         let punctuationObj = {
  //           text: myPiece[0],
  //           type: 'punctuation',
  //           class: ""
  //         }
  //         output.push(punctuationObj)


  //         // let wordObj = {
  //         //   text: myPiece[1],
  //         //   type: 'word',
  //         //   class: ""
  //         // }
  //         // output.push(wordObj)
  //         for (var i = 1; i < myPiece.length; i++) {
  //           let wordObj = {
  //             text: myPiece[i],
  //             type: 'word',
  //             class: ""
  //           }
  //           output.push(wordObj)
  //           // let punctuationObj = {
  //           //   text: myPiece[0],
  //           //   type: 'punctuation',
  //           //   class: ""
  //           // }
  //           // output.push(punctuationObj)
  //         }

  //       }
  //     }
  //   })

  //   return output

  // }

  saveALessonTest(lesson, lessonIndex) {
    // console.log(lessonIndex)

    this.getCourse()
      .then(myCourse => {

        myCourse[lessonIndex].sentences = lesson

        this.storage.set('course', myCourse)
      })
  }



  updateALesson(lesson, lessonIndex, sentenceIndex) {
    // console.log(lessonIndex)
    lesson.forEach(sentence => {
      sentence.practised = false
      sentence.reviewing = false
    })
    lesson[sentenceIndex].sentenceArray.forEach(item => {
      // console.log(item)
      if (item.class != 'red') {
        item.class = "";
      }
    })
    this.getCourse()
      .then(myCourse => {

        myCourse[lessonIndex].sentences = lesson

        this.storage.set('course', myCourse)
      })
  }


  saveNewLesson(lesson) {
 
    this.storage.get('myLessons')
      .then((result) => {
        let myLessons = JSON.parse(result)
        return myLessons
      }).then((myLessons) => {
        
        if(!myLessons) {
          myLessons = []
        }
        myLessons.push(lesson)
        let myLessonsForStorage = JSON.stringify(myLessons)
        this.storage.set('myLessons', myLessonsForStorage)
          .then(res => {
            console.log(res)
          })
      })
}

deleteLesson(lesson) {
  this.storage.get('myLessons')
  .then((result) => {
    let myLessons = JSON.parse(result)
    return myLessons
  }).then((myLessons)=> {
   
    let index = myLessons.findIndex(x => x.id == lesson.id)
    myLessons.splice(index, 1)
   
        let myLessonsForStorage = JSON.stringify(myLessons)
        this.storage.set('myLessons', myLessonsForStorage)
          .then(res => {
            this.events.publish('lessons-changed')
          })
 
  })

}





}
