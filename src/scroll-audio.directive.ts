import { Directive, Input, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[scrollAudio]'
})
export class ScrollAudioDirective implements OnInit {

  @Input() scrollAudio: string;

  audio: any;

  @HostListener('scroll') onScroll() {
    this.audio.play();
  }

  constructor() {
    
  }

  ngOnInit() {
    this.audio = document.getElementById(this.scrollAudio);
  }

}
