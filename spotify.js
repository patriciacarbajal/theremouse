$(document).ready(function() {
  	var myDataRef = new Firebase('https://theremouse.firebaseio.com/');
  	// myDataRef.remove()
	var theremins = {};
	var userId = Math.floor(Math.random() * 1000000) + 1;

	var audioCtx = new(window.AudioContext || window.webkitAudioContext)();


	$(document).mousemove(function(event) {
		$(".x").text("X: " + event.pageX);
		$(".y").text("Y: " + event.pageY);

		myDataRef.push({xCoord: event.pageX, yCoord: event.pageY, userId: userId});

	});

	myDataRef.on('child_added', function(snapshot) {
	if (!theremins[userId]) {
		var theremin = new Theremin(audioCtx);
		theremins[userId.toString()] = theremin;
	} 
	var x = snapshot.val().xCoord;
	var y = snapshot.val().yCoord;
	theremins[userId].update(x, y);
      
  $('body').mousemove(function(event) {
    var width = $('body').width(),
     height = $('body').height(),
     axisX = event.pageX,
     axisY = event.pageY;
 
    var hue = Math.floor(axisX / width * 360),
     saturation = Math.floor(axisY / height * 100),
     lightness = Math.floor(axisY / height * 100);
 
    $('body').css('background', 'hsl(' + hue + ',' + saturation + '%, ' + lightness + '%)');
  });

});
>>>>>>> spotify.html conflict fix

});

