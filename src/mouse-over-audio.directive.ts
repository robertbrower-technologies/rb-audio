import { Directive, Input, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[mouseOverAudio]'
})
export class MouseOverAudioDirective implements OnInit {

  @Input() mouseOverAudio: string;

  audio: any;

  @HostListener('mouseenter') onMouseEnter() {
    this.audio.play();
  }

  constructor() {
    
  }

  ngOnInit() {
    this.audio = document.getElementById(this.mouseOverAudio);
  }

}
