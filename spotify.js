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

 //  $('.line1').hover(function() {
 //      $('body').css('background-color', 'f8f087').fadeIn(3000);
 //  })
 //  $('.line2').hover(function() {
 //    $("body").fadeIn('slow').css('background-color', 'b7e3c0');
 //  })
 //  $('.line3').hover(function() {
 //    $("body").fadeIn('slow').css('background-color', 'ffc48c');
 //  })
 //  $('.line4').hover(function() {
 //    $("body").fadeIn('slow').css('background-color', 'dbbae5');
 //  })
 // $('.line5').hover(function() {
 //    $("body").fadeIn('slow').css('background-color', 'f39dd4');
 //  })
 //   $('.line6').hover(function() {
 //    $("body").fadeIn('slow').css('background-color', 'eecaf5');
 //  })
 //     $('.line7').hover(function() {
 //    $("body").fadeIn('slow').css('background-color', '95fefd');
 //  })
      
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

