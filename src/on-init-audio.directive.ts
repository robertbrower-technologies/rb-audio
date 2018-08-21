import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[onInitAudio]'
})
export class OnInitAudioDirective implements OnInit {

  @Input() onInitAudio: string; 
  
  audio: any;
  
  constructor() {
  }

  ngOnInit() {
    this.audio = document.getElementById(this.onInitAudio);
    this.audio.play();
  }

}
