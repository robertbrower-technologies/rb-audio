import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[onDestroyAudio]'
})
export class OnDestroyAudioDirective {

  @Input() onDestroyAudio: string; 
  
  audio: any;
  
  constructor() {
  }

  ngOnInit() {
    this.audio = document.getElementById(this.onDestroyAudio);
    this.audio.play();
  }

}
