console.log("HI")
$( document ).ready(function() {
    console.log( "ready!" );

	$(document).mousemove(function(event){

	  $(".x").text("X: "+event.pageX);
	  $(".y").text("Y: "+event.pageY);
	});


});

// function mouse_position()
// {
//     var e = window.event;

//     var posX = e.clientX;
//     var posY = e.clientY;

//     document.Form1.posx.value = posX;
//     document.Form1.posy.value = posY;

//     var t = setTimeout("mouse_position()",100);

// }