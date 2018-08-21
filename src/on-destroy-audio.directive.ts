import { Directive, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[onDestroyAudio]'
})
export class OnDestroyAudioDirective implements OnInit, OnDestroy {

  @Input() onDestroyAudio: string; 
  
  audio: any;
  
  constructor() {
  }

  ngOnInit() {
    this.audio = document.getElementById(this.onDestroyAudio);
  }

  ngOnDestroy() {
    this.audio.play();
  }

}
