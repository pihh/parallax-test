import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HideHeaderDirective } from './hide-header.directive';
import { FadeHeaderDirective } from './fade-header.directive';
import { ParallaxHeaderDirective } from './parallax-header.directive';



@NgModule({
  declarations: [
    HideHeaderDirective,
    FadeHeaderDirective,
    ParallaxHeaderDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HideHeaderDirective,
    FadeHeaderDirective,
    ParallaxHeaderDirective
  ]
})
export class SharedDirectivesModule { }
