var arrayToAudioBuffer = require('../');
var generateWhiteNoise = require('openmusic-white-noise');
var ac = new AudioContext();
var limiter = ac.createDynamicsCompressor();
limiter.connect(ac.destination);

var sampleData = generateWhiteNoise(ac.sampleRate); // 1 second of noise = 44100 samples, if that's the sampleRate
var buffer = arrayToAudioBuffer({
	context: ac,
	data: sampleData
});

document.getElementById('playNoise').addEventListener('click', play);

function play() {
	var bufferSource = ac.createBufferSource();
	bufferSource.buffer = buffer;
	bufferSource.connect(limiter);
	bufferSource.start();
}

