$(document).ready(function() {
	var audioCtx = new(window.AudioContext || window.webkitAudioContext)();

	theremin = new Theremin(audioCtx);

	$(document).mousemove(function(event) {
		$(".x").text("X: " + event.pageX);
		$(".y").text("Y: " + event.pageY);

		theremin.update(event.pageX, event.pageY);
	});

});

