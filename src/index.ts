import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClickAudioDirective } from './click-audio.directive';
import { MouseOverAudioDirective } from './mouse-over-audio.directive';
import { OnDestroyAudioDirective } from './on-destroy-audio.directive';
import { OnInitAudioDirective } from './on-init-audio.directive';
import { ScrollAudioDirective } from './scroll-audio.directive';

export * from './click-audio.directive';
export * from './mouse-over-audio.directive';
export * from './on-destroy-audio.directive';
export * from './on-init-audio.directive';
export * from './scroll-audio.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ClickAudioDirective,
    MouseOverAudioDirective,
    OnDestroyAudioDirective,
    OnInitAudioDirective,
    ScrollAudioDirective,
  ],
  exports: [
    ClickAudioDirective,
    MouseOverAudioDirective,
    OnDestroyAudioDirective,
    OnInitAudioDirective,
    ScrollAudioDirective
  ]
})
export class RbAudioModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RbAudioModule,
      providers: []
    };
  }
}
