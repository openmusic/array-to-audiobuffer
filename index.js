module.exports = function(options) {
	console.log(options);
	var context = options.context;
	var channels = options.channels !== undefined ? options.channels : 1;
	var sampleRate = options.sampleRate !== undefined ? options.sampleRate : context.sampleRate;
	var channelsData = channels === 1 ? [ options.data ] : options.data;
	var length = channels === 1 ? options.data.length : options.data[0].length;

	var buffer = context.createBuffer(channels, length, sampleRate);

	channelsData.forEach(function(channelData, channelIndex) {
		var bufferChannelData = buffer.getChannelData(channelIndex);
		channelData.forEach(function(sample, i) {
			bufferChannelData[i] = sample;
		});
	});

	return buffer;
};

