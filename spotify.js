$(document).ready(function() {
  var myDataRef = new Firebase('https://theremouse.firebaseio.com/');
	var theremins = {};
	var userId = Math.floor(Math.random() * 1000000) + 1;

	audioCtx = new(window.AudioContext || window.webkitAudioContext)();

	$(document).mousemove(function(event) {
		$(".x").text("X: " + event.pageX);
		$(".y").text("Y: " + event.pageY);

		myDataRef.push({x: event.pageX, y: event.pageY, userId: userId});
	});

  myDataRef.on('child_added', function(snapshot) {
    var x = snapshot.val().x;
    var y = snapshot.val().y;
    findAndUpdate(x, y);
  });

  var findAndUpdate = function(x, y) {
    if (!theremins[userId]) {
      theremins[userId] = new Theremin(audioCtx);
    }
    theremins[userId].update(x, y);
  }
});


