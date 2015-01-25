$(document).ready(function() {
  	var myDataRef = new Firebase('https://theremouse.firebaseio.com/');
  	myDataRef.remove()
	var theremins = {};
	var userId = Math.floor(Math.random() * 1000000) + 1;

	var audioCtx = new(window.AudioContext || window.webkitAudioContext)();


	$(document).mousemove(function(event) {
		$(".x").text("X: " + event.pageX);
		$(".y").text("Y: " + event.pageY);

		myDataRef.push({x: event.pageX, y: event.pageY, userId: userId});
		myDataRef.on('child_added', function(snapshot) {
			if (!theremins[userId]) {
				var theremin = new Theremin(audioCtx);
				theremins[userId] = theremin;
			} 
			var x = snapshot.val().x;
			var y = snapshot.val().y;
			theremins[userId].update(x, y);

		});

	});

});

