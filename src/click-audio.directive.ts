import { Directive, Input, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[clickAudio]'
})
export class ClickAudioDirective implements OnInit {

  @Input() clickAudio: string; 
  
  audio: any;
  
  @HostListener('click') onClick() {
    this.audio.play();
  }

  constructor() {
    
  }

  ngOnInit() {
    this.audio = document.getElementById(this.clickAudio);
  }

}
