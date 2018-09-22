import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddATextPage } from './add-a-text';

@NgModule({
  declarations: [
    AddATextPage,
  ],
  imports: [
    IonicPageModule.forChild(AddATextPage),
  ],
})
export class AddATextPageModule {}
