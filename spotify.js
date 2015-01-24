$(document).ready(function() {
	audioContext = new AudioContext();

	var audioCtx = new(window.AudioContext || window.webkitAudioContext)();

	var oscillator = audioCtx.createOscillator();
	var gainNode = audioCtx.createGain();

	oscillator.connect(gainNode);
	gainNode.connect(audioCtx.destination);

	oscillator.type = 'square';
	oscillator.detune.value = 10 // value in cents
	oscillator.start();
	theremin = new Theremin(oscillator, gainNode);

	$(document).mousemove(function(event) {
		$(".x").text("X: " + event.pageX);
		$(".y").text("Y: " + event.pageY);

		theremin.update(event.pageX, event.pageY);
	});

});

