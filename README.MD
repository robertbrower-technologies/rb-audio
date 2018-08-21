# rb-audio

clickAudio, mouseOverAudio, onDestroyAudio, onInitAudio and scrollAudio directives for Angular.

## Installation

To install this library, run:

```bash
$ npm install rb-audio --save
```

## Consuming RbAudioModule

From your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import RbAudioModule
import { RbAudioModule } from 'rb-audio';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify RbAudioModule as an import
    RbAudioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once RbAudioModule is imported, you can use its directives in your Angular application:

```xml
<!-- Add <audio> elements to index.html -->
<audio id="clickAudio">
  <source src="assets/audio/click.mp3" type="audio/mpeg">
    Your browser does not support audio.
</audio>
<audio id="mouseOverAudio">
  <source src="assets/audio/mouse-over.mp3" type="audio/mpeg">
  Your browser does not support audio.
</audio>
<audio id="onDestroyAudio">
  <source src="assets/audio/on-destroy.mp3" type="audio/mpeg">
  Your browser does not support audio.
</audio>
<audio id="onInitAudio">
  <source src="assets/audio/on-init.mp3" type="audio/mpeg">
  Your browser does not support audio.
</audio>
<audio id="scrollAudio">
  <source src="assets/audio/scroll.mp3" type="audio/mpeg">
    Your browser does not support audio.
</audio>
```

```xml
<!-- You can now use RbAudioModule directives in app.component.html -->
<h1>
  {{title}}
</h1>
<button mouseOverAudio="mouseOverAudio"></button>
```

Set the value of the audio directive to the ID of the audio element you added to index.html.

## License

MIT © [Robert Brower](mailto:robertbrower.technologies@gmail.com)
