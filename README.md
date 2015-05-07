# openmusic-array-to-audiobuffer

> Handy function to generate Web Audio Buffers given an array of sample data

## Usage

Given some audio sample data in an array, you want to convert it into a buffer that can be assigned to a `BufferSource` node. This is how you do this:

```javascript
var arrayToAudioBuffer = require('openmusic-array-to-audiobuffer');
var audioContext = new AudioContext();
var sampleData = makeWhiteNoise(44100);
var buffer = arrayToAudioBuffer({
	context: audioContext,
	data: sampleData
});
var bufferSource = audioContext.createBufferSource();
bufferSource.buffer = buffer;
bufferSource.connect(audioContext.destination);
bufferSource.start();
```

See `demo/main.js` for a working example.

TODO: example with multiple channels.

## Installing and building

### With NPM

[![Install with NPM](https://nodei.co/npm/openmusic-array-to-audiobuffer.png?downloads=true&stars=true)](https://nodei.co/npm/openmusic-array-to-audiobuffer/)

### From repository:

```bash
git clone https://github.com/openmusic/array-to-audiobuffer.git
```

Then install build dependencies, etc with:

Install build dependencies, etc with:

```bash
npm install
```

Before running the demo, run:

```bash
npm run build
```

Demo files will be placed in `build/`. Open `build/index.html` to access the demo.

Remember to rebuild the bundle each time you make a change to the demo (in `demo/`) or node code (`index.js`). Alternatively, you can also run the `watch` task, so it will watch for file changes and rebuild the bundle for you:

```bash
npm run watch
```


