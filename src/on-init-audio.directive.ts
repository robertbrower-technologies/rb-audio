import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[onInitAudio]'
})
export class OnInitAudioDirective {

  @Input() onInitAudio: string; 
  
  audio: any;
  
  constructor() {
  }

  ngOnInit() {
    this.audio = document.getElementById(this.onInitAudio);
    this.audio.play();
  }

}
