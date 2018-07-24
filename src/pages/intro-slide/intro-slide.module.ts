import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroSlidePage } from './intro-slide';

@NgModule({
  declarations: [
    IntroSlidePage,
  ],
  imports: [
    IonicPageModule.forChild(IntroSlidePage),
  ],
})
export class IntroSlidePageModule {}
