$(document).ready(function() {
  var myDataRef = new Firebase('https://theremouse.firebaseio.com/');
	var theremins = {};
	var userId = Math.floor(Math.random() * 1000000) + 1;

	var audioCtx = new(window.AudioContext || window.webkitAudioContext)();

	$(document).mousemove(function(event) {
		$(".x").text("X: " + event.pageX);
		$(".y").text("Y: " + event.pageY);

		myDataRef.push({xCoord: event.pageX, yCoord: event.pageY, userId: userId});
	});
		setInterval(function() {myDataRef.remove()}, 5000)

	myDataRef.on('child_added', function(snapshot) {
    var userId = snapshot.val().userId;
  	if (!theremins[userId]) {
  		var theremin = new Theremin(audioCtx);
  		theremins[userId.toString()] = theremin;
  	}
  	var x = snapshot.val().xCoord;
  	var y = snapshot.val().yCoord;
  	theremins[userId].update(x, y);

    $('body').mousemove(function(event) {
      var width = $('body').width();
      var height = $('body').height();
      var axisX = event.pageX;
      var axisY = event.pageY;

      var hue = Math.floor(axisX / width * 360);
      var saturation = Math.floor(axisY / height * 100);
      var lightness = Math.floor(axisY / height * 100);

      $('body').css('background', 'hsl(' + hue + ',' + saturation + '%, ' + lightness + '%)');
    });

  });

});

